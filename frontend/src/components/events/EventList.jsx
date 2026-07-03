import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventService";
import EventCard from "../home/eventsFAQ/EventCard";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data.data);
      } catch (error) {
        console.log("Error loading events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">All Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
