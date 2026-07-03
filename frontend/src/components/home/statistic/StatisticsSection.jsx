import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
import { getStatistics } from "../../../services/statisticService";
import { useEffect, useState } from "react";

const getIcon = (icon) => {
  switch (icon) {
    case "students":
      return FaUserGraduate;

    case "instructors":
      return FaChalkboardTeacher;

    case "courses":
      return FaBook;

    case "years":
      return FaCalendarAlt;

    default:
      return FaBook;
  }
};

const StatisticsSection = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const data = await getStatistics();
        setStats(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStatistics();
  }, []);
  
  return (
    <section className="bg-[#082A63] py-8 mt-3" data-aos="fade-up">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 text-white"
              >
                {/* Icon */}
                <Icon className="text-white text-4xl" />

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {item.number}+
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
