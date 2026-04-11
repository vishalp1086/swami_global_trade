const cloudinary = require("../config/cloudinary");
const Product = require("../models/Product");
const nodemailer = require("nodemailer");


// ✅ IMAGE UPLOAD
const uploadToCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
    {
      folder: "products",
      resource_type: "image",
      type: "upload", // ✅ IMPORTANT
    }
  );

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};


// ✅ PDF UPLOAD
const uploadPdfToCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
    {
      folder: "products",
      resource_type: "raw", // Keep it as a file
      type: "upload",
      access_mode: "public",
    }
  );

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};


// ✅ CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    let images = [];
    let pdf = null;

    // Upload images
    if (req.files?.images) {
      for (let file of req.files.images) {
        const uploaded = await uploadToCloudinary(file);
        images.push(uploaded);
      }
    }

    // Upload PDF
    if (req.files?.pdf) {
      const uploadedPdf = await uploadPdfToCloudinary(req.files.pdf[0]);
      pdf = uploadedPdf;
    }

    const product = new Product({
      productName: req.body.productName,
      subTitle: req.body.subTitle,
      description: req.body.description,
      images,
      pdf,
    });

    const saved = await product.save();
    res.status(201).json(saved);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// ✅ UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let images = [];
    let pdf = product.pdf;

    let existingImages = [];

    if (req.body.existingImages) {
      const parsed = JSON.parse(req.body.existingImages);

      existingImages = parsed.map(url => {
        const found = product.images.find(img => img.url === url);
        return found ? found : { url };
      });
    }

    // Upload new images
    if (req.files?.images) {
      for (let file of req.files.images) {
        const uploaded = await uploadToCloudinary(file);
        existingImages.push(uploaded);
      }
    }

    // Delete removed images
    const removedImages = product.images.filter(
      img => !existingImages.some(e => e.url === img.url)
    );

    for (const img of removedImages) {
      if (img.public_id) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }

    images = existingImages;

    // ✅ Replace PDF
    if (req.files?.pdf) {
      if (pdf?.public_id) {
        await cloudinary.uploader.destroy(pdf.public_id, {
          resource_type: "raw", // ✅ IMPORTANT
        });
      }

      const uploadedPdf = await uploadPdfToCloudinary(req.files.pdf[0]);
      pdf = uploadedPdf;
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        subTitle: req.body.subTitle,
        description: req.body.description,
        images,
        pdf,
      },
      { new: true }
    );

    res.json(updated);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


// ✅ DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    for (const img of product.images) {
      if (img.public_id) {
        await cloudinary.uploader.destroy(img.public_id);
      }
    }

    if (product.pdf?.public_id) {
      await cloudinary.uploader.destroy(product.pdf.public_id, {
        resource_type: "raw", // ✅ IMPORTANT
      });
    }

    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GET APIs (unchanged)
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.requestDownload = async (req, res) => {
  try {
    const { name, email, productId } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    const product = await Product.findById(productId);

    if (!product || !product.pdf?.url) {
      return res.status(404).json({ message: "PDF not found" });
    }

    // ✅ Email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "info@swamiglobaltrade.com",
        pass: "vegJi9-jeqsup-qemjiv", // ⚠️ move to .env later
      },
    });

    // ✅ Send to ADMIN
    await transporter.sendMail({
      from: `"Website Lead" <info@swamiglobaltrade.com>`,
      to: "info@swamiglobaltrade.com",
      subject: "New PDF Download Lead",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Product:</b> ${product.productName}</p>
      `,
    });

    // ✅ Send to USER
    await transporter.sendMail({
      from: `"Swami Global Trade" <info@swamiglobaltrade.com>`,
      to: email,
      subject: `Download ${product.productName}`,
      html: `
        <p>Hello ${name},</p>
        <p>Click below to download:</p>
        <a href="${product.pdf.url}" target="_blank">Download PDF</a>
      `,
    });

    // ✅ Inside requestDownload controller
const fileName = encodeURIComponent(
  product.productName.replace(/\s+/g, "_")
) + ".pdf"; // <--- ADD THIS MANUALLY

// ✅ Corrected response logic
res.json({
  message: "Email sent successfully",
  pdfUrl: product.pdf.url, // Send the clean URL from Cloudinary
});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};