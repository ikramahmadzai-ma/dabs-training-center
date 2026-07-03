import { FEATURES } from "../../../constant";
const FeaturesSection = () => {
  return (
    <div data-aos="fade-up">
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-5 p-6 lg:p-8"
                >
                  {/* Hexagon Icon */}
                  <div
                    className="w-16 h-20 sm:w-20 sm:h-24 bg-[#082A63] text-white flex items-center justify-center text-3xl sm:text-4xl shrink-0"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)",
                    }}
                  >
                    <Icon />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="  text-base sm:text-lg font-bold text-[#082A63] mb-2">
                      {item.title}
                    </h3>

                    <p className="  text-gray-600 text-sm leading-6 max-w-md">
                      {item.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  {index !== FEATURES.length - 1 && (
                    <div className="hidden md:flex items-center">
                      <div className="h-16 w-px bg-gray-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
