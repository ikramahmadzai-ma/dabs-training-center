import EventForm from "../components/events/EventForm"
import EventList from "../components/events/EventList"

const Events = () => {
  return (
     <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#082A63]">
          Events Management
        </h1>

        <p className="text-gray-500 mt-2">
          Add and view all events.
        </p>
      </div>

      {/* FORM */}
      <EventForm />

      {/* LIST BELOW FORM */}
      <div className="mt-10">
        <EventList />
      </div>
    </div>
  )
}

export default Events