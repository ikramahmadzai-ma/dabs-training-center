import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.webp";

function HeroSection() {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[650px] lg:min-h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#041630]/98 via-[#041630]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 md:px-6">
        <div className="max-w-2xl">
          <div
            data-aos="fade-right"
            className="max-w-2xl mt-12 md:mt-20 lg:mt-24"
          >
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl  lg:text-6xl">
              <span className="block">A National Hub for</span>

              <span className="block text-[#F59E0B]">Technical Excellence</span>

              <span className="block">and Innovation</span>
            </h1>

            <p className="  mt-5 text-sm  sm:text-base md:text-lg text-gray-200 leading-6 md:leading-7 max-w-xl">
              Empowering Afghanistan's energy sector through quality training,
              innovation, and professional development.
            </p>
          </div>

          <div data-aos="fade-up" className="mt-10 flex gap-4 flex-wrap">
            <Link to="/courses" className="apply-btn">
              Explore Courses
            </Link>

            <Link
              to="/about"
              className="border border-white hover:border-0 text-white hover:bg-[#f59e0b]  hover:text-black  px-6 py-3 rounded font-semibold  transition-all duration-30 cursor-pointer "
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
