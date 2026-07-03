import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";

import { getInstructors } from "../../../services/instructorService";
import InstructorCard from "./InstructorCard";
import { Link } from "react-router-dom";

const InstructorsSection = () => {
  const swiperRef = useRef(null);
  const [instructors, setInstructors] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInstructors();
        setInstructors(data.data); // important (because Resource wraps data)
      } catch (error) {
        console.log("Error loading instructors:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-5 bg-[#f8f8f8]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}

        <div className="relative mb-7">
          <h2 className="text-center text-lg md:text-xl font-bold text-[#1b3356]">
            We Have Fantastic Team To Help Student And They Are Always Ready.
          </h2>
          <Link to="/gallery">
            <button className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 border border-gray-300 rounded text-sm font-medium hover:border-0 hover:cursor-pointer hover:text-black hover:bg-amber-500 transition">
              View All Instructors
            </button>
          </Link>
        </div>

        <div className="relative w-full  px-2 md:px-0">
          {/* Left Arrow */}

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex absolute left-[-18px] lg:left-[-35px] top-1/3 -translate-y-1/2 z-10 text-gray-500 hover:text-[#f59e0b] transition cursor-pointer"
          >
            <FaChevronLeft size={22} />
          </button>

          {/* Slider */}

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={instructors.length > 5}
            autoplay={
              instructors.length > 5
                ? {
                    delay: 3500,
                  }
                : false
            }
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 5,
                spaceBetween: 20, // desktop unchanged
              },
            }}
          >
            {instructors.map((instructor, index) => (
              <SwiperSlide key={instructor.id}>
                <InstructorCard
                  instructor={instructor}
                  active={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex absolute right-[-18px] lg:right-[-35px] top-1/3 -translate-y-1/2 z-10 text-gray-500 hover:text-[#f59e0b] cursor-pointer"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
        <div className="mt-10 sm:hidden flex justify-center">
          <Link to="/gallery">
            <button className=" right-0 top-1/2 -translate-y-1/2 px-36 py-2 border border-gray-300 rounded text-sm font-medium hover:border-0 hover:cursor-pointer hover:text-black hover:bg-amber-500 transition">
              View All Instructors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
