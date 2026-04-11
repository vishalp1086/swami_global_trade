import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AdminProductForm = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const [productName, setProductName] = useState("");
  const[subTitle,setSubTitle]=useState("")
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${id}`);
      const p = res.data;

      setProductName(p.productName || "");
      setSubTitle(p.subTitle || "");
setDescription(p.description || ""); // ✅ ADD THIS
setImages(p.images?.map(img => img.url) || []);
setPdf(p.pdf?.url || null);

    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("productName", productName);
     data.append("subTitle", subTitle);
data.append("description", description); // ✅ ADD THIS

      // ✅ Images
      const existingImages = images.filter(img => typeof img === "string");
      const newImages = images.filter(img => typeof img !== "string");

      data.append("existingImages", JSON.stringify(existingImages));

      newImages.forEach(file => {
        data.append("images", file);
      });

      // ✅ PDF
      if (pdf && typeof pdf !== "string") {
        data.append("pdf", pdf);
      }

      if (id) {
        await axios.put(`http://localhost:5000/api/products/${id}`, data);
        alert("Updated Successfully");
      } else {
        await axios.post("http://localhost:5000/api/products", data);
        alert("Added Successfully");
      }

    } catch (err) {
      console.log(err);
      alert("Error saving product");
    }
  };
//   if (!productName) return alert("Product name required");
// if (!images.length) return alert("Upload at least 1 image");
// if (!pdf) return alert("Upload PDF");

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white text-black shadow-xl rounded">

      <h2 className="text-3xl font-bold mb-6">
        {id ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* PRODUCT NAME */}
        <input
          type="text"
          placeholder="Product Name"
          className="form-input w-full"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sub title"
          className="form-input w-full"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
<textarea
  placeholder="Product Description"
  className="form-input w-full h-32"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
        {/* IMAGES */}
        <div className="p-5 rounded ">
          <h3 className="  font-semibold mb-3">Product Images</h3>

          <input
            type="file"
            multiple
             className="bg-gray-200"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setImages(prev => [...prev, ...files]);
             
            }}
          />

          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((img, index) => {
              const url =
                typeof img === "string"
                  ? img
                  : URL.createObjectURL(img);

              return (
                <div key={index} className="relative">
                  <img
                    src={url}
                    className="w-full h-28 object-cover rounded border form-input"
                  />

                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                    onClick={() =>
                      setImages(prev => prev.filter((_, i) => i !== index))
                    }
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* PDF UPLOAD */}
        <div className="p-5 rounded">
          <h3 className="font-semibold mb-3">Upload PDF</h3>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setPdf(e.target.files[0])}
          />

          {/* Preview */}
          {pdf && (
            <div className="mt-3">
              {typeof pdf === "string" ? (
                <a href={pdf} target="_blank" className="text-blue-600 underline">
                  View Existing PDF
                </a>
              ) : (
                <p className="text-sm text-gray-600">{pdf.name}</p>
              )}
            </div>
          )}
        </div>

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          {id ? "Update" : "Submit"}
        </button>

      </form>
    </div>
  );
};

export default AdminProductForm;