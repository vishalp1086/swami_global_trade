import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProductManager = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://swamiglobaltrade-production.up.railway.app/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(`https://swamiglobaltrade-production.up.railway.app/api/products/${id}`);
      alert("Product deleted");
      fetchProducts();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const filteredProducts = products.filter(p =>
    p.productName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>

        <input
          type="text"
          placeholder="Search product..."
          className="border px-3 py-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* LIST */}
      {filteredProducts.map((p) => (

        <div key={p._id} className="border rounded-lg mb-6 shadow bg-white p-4">

          <div className="flex gap-6">

            {/* IMAGES */}
            <div className="flex gap-2 flex-wrap">
              {p.images?.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  className="w-28 h-20 object-cover rounded"
                />
              ))}
            </div>

            {/* DETAILS */}
            <div className="flex-1">

              <h2 className="text-xl font-semibold">
                {p.productName}
              </h2>
<h2 className="text-xl font-semibold">
                {p.subTitle}
              </h2>
              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-2 line-clamp-3">
                {p.description}
              </p>

              {/* PDF */}
              {p.pdf?.url && (
                <a
                  href={p.pdf.url}
                  target="_blank"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  View PDF
                </a>
              )}

              {/* ACTIONS */}
              <div className="flex gap-3 mt-4">

                <button
                  onClick={() => navigate(`/admin/products?id=${p._id}`)}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default AdminProductManager;