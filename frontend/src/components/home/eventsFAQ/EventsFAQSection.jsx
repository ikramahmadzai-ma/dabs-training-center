import { useEffect, useState } from "react";
import { getEvents } from "../../../services/eventService";
import faqData from "./faqData";

import EventCard from "./EventCard";
import FAQItem from "./FAQItem";
import { Link } from "react-router-dom";
const EventsFAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEvents("?limit=3");
        setEvents(response.data); // because Laravel Resource wraps data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="py-10 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* EVENTS */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-0 mb-5 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold text-[#1b3356] uppercase w-full sm:w-auto">
                Upcoming Events
              </h2>

              {/* Desktop Button */}
              <Link to="/events">
                <button className="hidden sm:block px-4 py-[6px] border border-[#1b3356] text-[#1b3356] text-sm font-semibold rounded-md hover:bg-[#f59e0b] hover:text-black cursor-pointer transition-all duration-300">
                  View All Events
                </button>
              </Link>
            </div>

            <div className="space-y-4 border-r-0 lg:border-r border-gray-200 pr-0 lg:pr-4">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
          <div className="mt-6 sm:hidden">
            <Link to="/events">
              <button className="w-full px-4 py-[10px] border border-[#1b3356] text-[#1b3356] text-sm font-semibold rounded-md hover:bg-[#f59e0b] hover:text-black cursor-pointer transition-all duration-300">
                View All Events
              </button>
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg sm:text-xl font-bold text-[#1b3356] uppercase mb-5 text-center lg:text-left">
              <span className="text-[#f59e0b]">Fre</span>quently Asked Questions
            </h2>

            <div>
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  open={openId === faq.id}
                  onToggle={(id) => setOpenId(openId === id ? null : id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventsFAQSection;
