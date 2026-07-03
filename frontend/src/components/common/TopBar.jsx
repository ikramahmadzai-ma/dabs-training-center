import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#1b3356] text-white">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center text-[12px] font-semibold">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt color="orange" />
          <span>
            Tarakhel 9th District, Da Afghanistan Brishna Sherkat Training
            Center
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[1px] h-6 bg-white opacity-50"></div>
          <div className="flex gap-4">
            <Link to=""><FaFacebookF className="cursor-pointer" color="orange" /></Link>
            <FaYoutube className="cursor-pointer" color="orange" />
            <FaLinkedinIn className="cursor-pointer" color="orange" />
            <FaInstagram className="cursor-pointer" color="orange" />
          </div>
          <div className="w-[1px] h-6 bg-white opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
