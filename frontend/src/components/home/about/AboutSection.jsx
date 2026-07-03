import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

const AboutSection = () => {
  return (
    <section className="py-10 lg:py-2 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
