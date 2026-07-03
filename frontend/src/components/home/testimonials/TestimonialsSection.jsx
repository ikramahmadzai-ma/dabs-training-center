import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import { getTestimonials } from "../../../services/testimonialService";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const response = await getTestimonials();
      setTestimonials(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchTestimonials();
}, []);
  return (
    <section className="mt-5 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-6">
          <p className="uppercase text-[#f59e0b] font-bold text-sm tracking-wider">
            What Our Students Say
          </p>

          <h2 className=" text-3xl md:text-xl font-bold text-[#1b3356]">
            Let's See What Our Valuable Students Think About Us
          </h2>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
