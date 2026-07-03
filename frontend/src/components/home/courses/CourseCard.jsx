import { FaClock, FaStar, FaUserGraduate } from "react-icons/fa";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg flex flex-col h-full">
      {/* Course Image */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover"
        />

        {/* Instructor */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow">
          <img
            src={course.instructor?.image}
            alt={course.instructor?.name}
            className="w-8 h-8 rounded-full object-cover"
          />

          <span className="text-xs font-medium">
            {course.instructor?.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-[#082A63] text-md mb-3">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-6">{course.description}</p>

        {/* Bottom Section (FIXED at bottom) */}
        <div className="mt-auto pt-5 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaClock className="text-[#F59E0B]" />
            {course.duration}
          </div>

          <div className="flex items-center gap-1">
            <FaStar className="text-[#F59E0B]" />
            {course.rating}
          </div>

          <div className="flex items-center gap-1">
            <FaUserGraduate className="text-[#F59E0B]" />
            {course.students}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
