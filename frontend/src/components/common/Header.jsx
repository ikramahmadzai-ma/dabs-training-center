import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} className="w-10 h-10 object-contain" />

          <div>
            <h1 className="text-xl font-bold text-blue-900">
              Breshna Training Center
            </h1>
            <p className="text-gray-500 text-sm">
              Da Afghanistan Breshna Sherkat (DABS)
            </p>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#1b3356] text-xl cursor-pointer"
          >
            <FaBars />
          </button>
        </div>
        {/* RIGHT SIDE (closer layout) */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-3">
            <FaPhoneAlt color="orange" />
            <div className="text-md">
              <p className="font-semibold text-[#1b3356]">0093729002454</p>
              <p className="text-gray-500">Call Us</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope color="orange" />
            <div className="text-md">
              <p className="font-semibold text-[#1b3356]">info@dabs.af</p>
              <p className="text-gray-500">Email Us</p>
            </div>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Header;
