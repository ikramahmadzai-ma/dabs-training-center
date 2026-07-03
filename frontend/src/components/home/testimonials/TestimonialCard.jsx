function TestimonialCard({ testimonial }) {
  return (
        <div className="bg-white border shadow-lg border-gray-200 rounded-md p-5 h-[230px] flex flex-col">
      <div>
        <h3 className="font-semibold text-[#1b3356] mb-3">
          Beyond Expectation
        </h3>

        <p className="text-gray-600 text-sm leading-7">
          {testimonial.comment}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-[#1b3356]">
            {testimonial.name}
          </h4>

          <p className="text-xs text-gray-500">
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;