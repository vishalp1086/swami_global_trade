import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Search, Bell, ShoppingCart, ChevronDown ,ArrowLeft} from "lucide-react";
import { LayoutDashboard, Package,LogOut, Briefcase } from "lucide-react";



const AdminLayout = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
  const token = localStorage.getItem("adminToken");
  const user = localStorage.getItem("adminUser");

  if (!token) {
    navigate("/admin", { replace: true });
  }

  if (user) {
    const parsedUser = JSON.parse(user);

    // If backend sends name
    if (parsedUser.name) {
      setAdmin(parsedUser.name);
    }
    // If only email is available
    else if (parsedUser.email) {
      const usernameFromEmail = parsedUser.email.split("@")[0];
      setAdmin(usernameFromEmail);
    }
    // Fallback default
    else {
      setAdmin("Vinayak");
    }
  } else {
    setAdmin("Vinayak");
  }
}, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white relative">

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed md:relative z-50 top-0 left-0 h-full 
        bg-linear-to-b from-[#1e293b] to-[#0f172a] 
        shadow-2xl transform transition-all duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        ${sidebarOpen ? "w-64" : "w-20"}
        `}
      >
        <div className="flex items-center justify-between p-6">
          {sidebarOpen && (
            <h2 className="text-xl font-bold">Admin</h2>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:block"
          >
            {sidebarOpen ? <ArrowLeft
  size={20}
  className="transition-transform duration-300 hover:-translate-x-2 hover:scale-110"
/> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex flex-col space-y-3 px-4 text-gray-300">
          <Link
            to="/admin/dashboard"
            className="hover:bg-white/10 p-3 rounded-xl transition"
          >
            {sidebarOpen ? "Dashboard" : <LayoutDashboard/>}
          </Link>

          <Link
            to="/admin/products"
            className="hover:bg-white/10 p-3 rounded-xl transition"
          >
            {sidebarOpen ? "Products" : <Package/>}
          </Link>
          
          <Link
            to="/admin/ProductManager"
            className="hover:bg-white/10 p-3 rounded-xl transition"
          >
            {sidebarOpen ? "Product Manager" : <Briefcase size={18}  />}
          </Link>
 <Link
            to="/admin/AdminBlogForm"
            className="hover:bg-white/10 p-3 rounded-xl transition"
          >
            {sidebarOpen ? "Blog Manager" : <Briefcase size={18}  />}
          </Link>
          
          <Link
            to="/admin/AdminBlogList"
            className="hover:bg-white/10 p-3 rounded-xl transition"
          >
            {sidebarOpen ? "Blog List" : <Briefcase size={18}  />}
          </Link>
        







{/* MASTER DATA */}
{sidebarOpen && (
<p className="text-xs text-gray-400 mt-4 mb-1 px-2">
MASTER DATA
</p>
)}

<Link
to="/admin/master/categories"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Categories"}
</Link>

<Link
to="/admin/master/subcategories"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Sub Categories"}
</Link>

<Link
to="/admin/master/forms"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Forms"}
</Link>

<Link
to="/admin/master/applications"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Applications"}
</Link>

<Link
to="/admin/master/packaging"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Packaging"}
</Link>

<Link
to="/admin/master/specifications"
className="hover:bg-white/10 p-3 rounded-xl transition flex items-center gap-3"
>
<Briefcase size={18}/>
{sidebarOpen && "Technical Specs"}
</Link>

</nav>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col w-full">

        {/* ================= TOP NAV ================= */}
        <div className="h-16 md:h-20 flex items-center justify-between px-4 md:px-10
          bg-linear-to-r from-[#1e293b] via-[#312e81] to-[#0f172a] shadow-md">

          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>

            <h1 className="text-lg font-semibold hidden md:block">
              Admin Dashboard
            </h1>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* Search (hidden on small mobile) */}
            <div className="hidden md:flex items-center bg-white/10 px-4 py-2 rounded-full">
              <Search size={18} className="text-gray-300" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm px-2 text-white placeholder-gray-400"
              />
            </div>

            <Bell className="cursor-pointer hover:text-blue-400 transition" />
            <ShoppingCart className="cursor-pointer hover:text-blue-400 transition" />

            {/* USER DROPDOWN */}
            <div className="relative">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center font-semibold">
                  {admin?.charAt(0)}
                </div>
                <span className="hidden md:block">
                  {admin}
                </span>
                <ChevronDown size={16} />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-[#1e293b] rounded-xl shadow-xl py-2 flex flex-row cursor-pointer">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 flex flex-row cursor-pointer"
                  >
                  <LogOut/> Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1 p-4 md:p-10 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#312e81]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;