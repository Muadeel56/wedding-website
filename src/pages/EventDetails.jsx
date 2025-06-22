import { MapPin, Calendar, Clock, Shirt } from "lucide-react";

const events = [
  {
    title: "Wedding Ceremony",
    date: "Saturday, October 26, 2024",
    time: "4:00 PM",
    venue: "The Grand Cathedral",
    address: "123 Main Street, Downtown",
    dressCode: "Formal Attire",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361023779!2d-74.3093372242191!3d40.69753995434193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1624896734582!5m2!1sen!2s",
  },
  {
    title: "Reception",
    date: "Saturday, October 26, 2024",
    time: "7:00 PM onwards",
    venue: "The Crystal Ballroom",
    address: "456 High Avenue, Uptown",
    dressCode: "Black Tie Optional",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361023779!2d-74.3093372242191!3d40.69753995434193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1624896734582!5m2!1sen!2s",
  },
];

const EventCard = ({ event }) => (
  <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
    <div className="p-6">
      <h3 className="text-3xl font-bold font-serif text-primary">{event.title}</h3>
      <ul className="mt-6 space-y-4 text-muted">
        <li className="flex items-center">
          <Calendar className="w-5 h-5 mr-3 text-primary" />
          <span>{event.date}</span>
        </li>
        <li className="flex items-center">
          <Clock className="w-5 h-5 mr-3 text-primary" />
          <span>{event.time}</span>
        </li>
        <li className="flex items-center">
          <MapPin className="w-5 h-5 mr-3 text-primary" />
          <span>
            <strong>{event.venue}</strong>, {event.address}
          </span>
        </li>
        <li className="flex items-center">
          <Shirt className="w-5 h-5 mr-3 text-primary" />
          <span>
            Dress Code: <strong>{event.dressCode}</strong>
          </span>
        </li>
      </ul>
    </div>
    <div className="w-full h-64 bg-gray-200">
      <iframe
        src={event.mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title={`${event.title} Location`}
      ></iframe>
    </div>
  </div>
);

export default function EventDetails() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl">Event Details</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Join us as we celebrate. Here's what you need to know.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
} 