import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProductForm from "./AdminProductForm";

const AdminProducts = () => {
 
  const [selectedProduct, setSelectedProduct] = useState(null);

 

  return (
    <div className="p-8 space-y-8">

      <AdminProductForm
        selectedProduct={selectedProduct}
        onSuccess={() => {
          fetchProducts();
          setSelectedProduct(null);
        }}
      />

      
    </div>
  );
};

export default AdminProducts;