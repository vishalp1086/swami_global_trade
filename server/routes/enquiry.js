const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {

  try {

    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: "info@swamiglobaltrade.com",
        pass: "vegJi9-jeqsup-qemjiv",
      },
    });

    const mailOptions = {
      from: `"Website Enquiry" <info@swamiglobaltrade.com>`,
      to: "info@swamiglobaltrade.com",
      subject: "New Enquiry from Website",

      html: `
        <h3>New Enquiry</h3>

        <p><b>Name:</b> ${data.name}</p>
        <p><b>Company:</b> ${data.company}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Country:</b> ${data.country}</p>
        <p><b>Products:</b> ${data.products.join(", ")}</p>
        <p><b>Enquiry Type:</b> ${data.enquiryType}</p>
        <p><b>Quantity:</b> ${data.quantity}</p>
        <p><b>Packaging:</b> ${data.packaging}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Email failed" });
  }
});

module.exports = router;