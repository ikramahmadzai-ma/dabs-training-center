import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
        {/* Date Box */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f59e0b] rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0 mx-auto sm:mx-0">
          <span className="font-bold text-base sm:text-lg">{event.day}</span>
          <span className="text-[10px] sm:text-xs">{event.month}</span>
        </div>

        {/* Content */}
        <div className="text-center sm:text-left w-full">
          <h3 className="font-semibold text-[#1b3356] mb-2 text-sm sm:text-base">
            {event.title}
          </h3>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 justify-center sm:justify-start">
            <span className="flex items-center justify-center sm:justify-start gap-2">
              <FaClock />
              {event.time}
            </span>

            <span className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt />
              {event.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
