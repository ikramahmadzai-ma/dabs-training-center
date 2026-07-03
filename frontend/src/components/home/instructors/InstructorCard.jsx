const InstructorCard = ({ instructor, active }) => {
  return (
    <div className="text-center">
      {/* Image Card */}

      <div
        className={`
          bg-white rounded-sm transition-all duration-300
          ${
            active
              ? "border-2 border-[#f59e0b]"
              : "border border-gray-400 hover:border-[#f59e0b]"
          }
        `}
      >
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-60 sm:h-36 md:h-32 object-cover rounded-sm"
        />
      </div>

      {/* Info Outside Card */}

      <div className="mt-3">
        <h3 className="font-semibold text-[#1b3356] text-sm">
          {instructor.name}
        </h3>

        <p className="text-gray-500 text-xs mt-1">{instructor.position}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
