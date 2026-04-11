import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";
import Footer from "./components/Footer";

import AdminProducts from "./admin/AdminProducts"
import AdminProductmanager from "./admin/adminProductmanager";
import MasterAdminPanel from "./admin/Mastermanger";
import ManageForms from "./admin/ManageForms";
import ManageCategories from "./admin/ManageCategories"
import ManageApplications from "./admin/ManageApplications";
import ManagePackaging from "./admin/ManagePackaging";
import ManageSubCategories from "./admin/ManageSubCategories";
import ManageTechnicalSpecs from "./admin/ManageTechnicalSpecs";
import MasterManager from "./admin/Mastermanger";
import AdminProductForm from "./admin/AdminProductForm";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/Blogpage";
import AdminBlogForm from "./admin/AdminBlogForm";
import SingleBlog from "./pages/SingleBlog";
import AdminBlogList from "./admin/AdminBlogList";


function AppWrapper() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Global SEO */}
      {!isAdminRoute && (
        <Helmet>
          <title>Swami Global Trade LLP | Exporter of Dehydrated Vegetables & Spices</title>

          <meta
            name="description"
            content="Swami Global Trade LLP is an India-based exporter of dehydrated onion, garlic, turmeric, chilli and frozen food products supplying global markets."
          />

          <meta
            name="keywords"
            content="dehydrated onion exporter, garlic exporter india, turmeric supplier, frozen vegetables exporter"
          />

          <meta name="robots" content="index, follow" />

          {/* Open Graph for social sharing */}
          <meta property="og:title" content="Swami Global Trade LLP" />
          <meta
            property="og:description"
            content="Global exporter of dehydrated vegetables, spices and frozen foods."
          />
          <meta property="og:type" content="website" />
        </Helmet>
      )}

      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/blog" element={<BlogPage />} />
         <Route path="/blog/:slug" element={<SingleBlog/>}/>
         <Route path="/admin/AdminlogFrom" element={<AdminBlogForm/>}/>
          <Route path="/admin/AdminBlogList" element={<AdminBlogList />} />
           <Route path="/admin/AdminlogFrom/:id" element={<AdminBlogForm/>}/>
          
        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="Products" element={<AdminProducts />} />
          <Route path="ProductManager" element={<AdminProductmanager />} />
          <Route path="master/:type" element={<MasterManager />} />
          <Route path="products/:id" element={<AdminProductForm />} />
           <Route path="AdminBlogForm" element={<AdminBlogForm/>} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;