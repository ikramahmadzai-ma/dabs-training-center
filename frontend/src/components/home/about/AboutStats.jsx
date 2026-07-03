import {
  FaChalkboardTeacher,
  FaBook,
  FaUsers,
  FaBookReader,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUsers,
    number: "9",
    title: "Happy Students",
  },
  {
    icon: FaChalkboardTeacher,
    number: "8",
    title: "Qualified Teachers",
  },
  {
    icon: FaBookReader,
    number: "1",
    title: "Courses",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex items-center gap-3 bg-white rounded-lg justify-center sm:justify-start w-full"
          >
            <Icon className="text-[#082A63] text-3xl sm:text-4xl" />

            <div>
              <div className="text-lg sm:text-xl font-bold text-[#F59E0B]">
                {item.number}+
              </div>
              <div className="text-gray-500 text-xs sm:text-sm font-semibold">
                {item.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutStats;
