import { FaTimes, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/facilities", label: "FACILITIES" },
    { path: "/about", label: "ABOUT" },
    { path: "/courses", label: "COURSES" },
    { path: "/events", label: "EVENTS" },
    { path: "/materials", label: "MATERIALS" },
    { path: "/publications", label: "PUBLICATIONS" },
    { path: "/gallery", label: "GALLERY" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="bg-[#1b3356] text-white px-5 py-4 flex items-center justify-between">
          <h3 className="font-semibold">Menu</h3>

          <button onClick={onClose} className="cursor-pointer">
            <FaTimes />
          </button>
        </div>

        {/* Nav Links */}

        <ul className="py-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm font-bold  hover:text-[#f59e0b] ${
                    isActive ? "text-[#f59e0b]" : "text-[#1b3356]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
           <button className="apply-btn mx-4">Apply Now</button>
        </ul>

        {/* Header Info */}

        <div className="p-5 border-t grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-[#1b3356]">0093729002454</p>

            <p className="text-sm text-gray-500 mb-3">Call Us</p>
          </div>
          <div>
            <p className="font-semibold text-[#1b3356]">info@dabs.af</p>

            <p className="text-sm text-gray-500">Email Us</p>
          </div>
        </div>


        {/* Social */}

        <div className="absolute bottom-6 left-5 flex gap-4">
          <FaFacebookF className="text-[#f59e0b] cursor-pointer" />

          <FaYoutube className="text-[#f59e0b] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
