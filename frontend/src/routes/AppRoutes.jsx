import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Facilities from "../pages/Facilities";
import Events from "../pages/Events";
import Materials from "../pages/Materials";
import Publications from "../pages/Publications";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
