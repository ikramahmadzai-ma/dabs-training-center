import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { getCourses } from "../../services/courseService";
import { getEvents } from "../../services/eventService";
import { getInstructors } from "../../services/instructorService";
const Navbar = () => {
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

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const openSearch = async () => {
    setShowSearch(true);

    if (loaded) return;

    try {
      const courses = await getCourses();
      const events = await getEvents();
      const instructors = await getInstructors();

      const data = [
        ...(courses.data || []).map((item) => ({
          type: "Course",
          title: item.title,
          path: "/courses",
        })),

        ...(events.data || []).map((item) => ({
          type: "Event",
          title: item.title,
          path: "/events",
        })),

        ...(instructors.data || []).map((item) => ({
          type: "Instructor",
          title: item.name,
          path: "/courses",
        })),
      ];

      setResults(data);
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredResults = results.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <nav className="hidden lg:block bg-[#1b3356] text-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-8 h-10 font-semibold text-[12px]">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-300 font-semibold border-b-2 border-orange-300 pb-[10px]"
                    : "hover:text-orange-300 transition"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-auto flex items-center">
            <div
              className={`flex items-center bg-white rounded-md overflow-hidden transition-all duration-300 ${
                showSearch ? "w-72 opacity-100 mr-3 px-3" : "w-0 opacity-0 px-0"
              }`}
            >
              <input
                type="text"
                autoFocus={showSearch}
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 h-8 ml-2 outline-none text-sm text-black bg-transparent"
              />
              {showSearch && (
                <div className="absolute right-[124PX] top-10 w-72 bg-white rounded shadow-lg z-50">
                  {/* INPUT */}
                  <div className="p-2 border-b"></div>

                  {/* RESULTS */}
                  <div className="max-h-64 overflow-y-auto">
                    {filteredResults.length === 0 ? (
                      <p className="p-3 text-gray-500">No results found</p>
                    ) : (
                      filteredResults.map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block px-4 py-3 hover:bg-gray-100 text-black border-b"
                          onClick={() => {
                            setShowSearch(false);
                            setSearch("");
                          }}
                        >
                          <p className="font-medium">{item.title}</p>
                          <p className="text-xs text-gray-500">{item.type}</p>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <FaSearch
              onClick={() => {
                if (!showSearch) {
                  openSearch();
                } else {
                  setShowSearch(false);
                  setSearch("");
                }
              }}
              className="cursor-pointer hover:text-orange-300 transition"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
