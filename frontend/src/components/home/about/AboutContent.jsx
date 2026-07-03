import { FaCheckCircle } from "react-icons/fa";
import AboutStats from "./AboutStats";
import { Link } from "react-router-dom";

const AboutContent = () => {
  const features = [
    {
      title: "Building the Future of Energy Through Learning",
      description:
        "The Breshna Training Center (BTC) is the official capacity building arm of Da Afghanistan Breshna Sherkat (DABS), operating under the guidance of the Employees Affairs Directorate. We provide structured training programs in energy, engineering, safety, and management to develop competent professionals for a brighter and stronger Afghanistan.",
    },
  ];

  return (
    <div className="text-center sm:text-left">
      <span className="text-[#F59E0B] font-semibold uppercase">
        Welcome to DABS
      </span>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082A63] mt-3">
        {features[0].title}
      </h2>

      <p className="mt-4 sm:mt-6 text-gray-600 leading-6 text-sm sm:text-base">
        {features[0].description}
      </p>

      <AboutStats />

      <Link to="/about">
        <button
          className="
          mt-6 sm:mt-7
          w-full sm:w-auto
          apply-btn
        "
        >
          Learn More About Us
        </button>
      </Link>
    </div>
  );
};

export default AboutContent;
