import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import post1 from "../../assets/images/2.jpeg";
import post2 from "../../assets/images/3.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#081c3a] text-white">
      <div className="max-w-7xl mx-auto px-5 py-5">
        {/* Top Footer */}

        <div className="grid lg:grid-cols-[1.3fr_auto_1fr_1fr_auto_1fr] gap-8 items-start">
          {/* About */}

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            {/* Logo */}

            <img
              src={logo}
              alt="DABS Logo"
              className="w-14 h-14 object-contain flex-shrink-0"
            />

            {/* Content */}

            <div>
              <h3 className="text-md font-bold mb-2">
                Breshna Training Center
              </h3>

              <p className="text-gray-300 text-sm leading-6 mb-3">
                A National Hub for Technical Excellence and Innovation.
                Empowering Afghanistan's energy sector through quality training
                and professional development.
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-7 h-7 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition"
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-7 h-7 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-px h-full bg-white/10"></div>
          {/* Quick Links */}

          <div>
            <h3 className="text-md font-bold mb-2">Quick Links</h3>

            <ul className=" text-gray-300 ">
              <li>
                <Link to="/" className="hover:text-[#f59e0b]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#f59e0b]">
                  About
                </Link>
              </li>

              <li>
                <Link to="/courses" className="hover:text-[#f59e0b]">
                  Courses
                </Link>
              </li>

              <li>
                <Link to="/events" className="hover:text-[#f59e0b]">
                  Events
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-[#f59e0b]">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#f59e0b]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div className="space-y-4 text-gray-300 text-center sm:text-left">
            <h3 className="text-md font-bold mb-2">Contact Info</h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#f59e0b]" />

                <p className="text-sm">
                  Tarakhel 9th District, Da Afghanistan Breshna Sherkat Training
                  Center
                </p>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#f59e0b]" />

                <p className="text-sm">info@dabs.af</p>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#f59e0b]" />

                <p className="text-sm">0093729002454</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-full bg-white/10"></div>
          {/* Recent Posts */}

          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-md font-bold mb-2">Recent Posts</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <img
                  src={post1}
                  alt=""
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <h4 className="text-sm font-medium">Computer Fundamental</h4>

                  <p className="text-xs text-gray-400 mt-1">Feb 19, 2026</p>
                </div>
              </div>

              <div className="flex gap-3">
                <img
                  src={post2}
                  alt=""
                  className="w-16 h-16 object-cover rounded"
                />

                <div>
                  <h4 className="text-sm font-medium">Power System</h4>

                  <p className="text-xs text-gray-400 mt-1">Feb 18, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-[#17345f]">
        <div className="max-w-7xl mx-auto px-5 py-2 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-400">
            © 2026 DABS Website. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            Designed & Developed By DABS MIS Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
