import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  MdAcUnit,
  MdTv,
  MdWifi,
  MdLocalCafe,
  MdBusinessCenter,
  MdRestaurant,
  MdOutdoorGrill,
  MdBalcony,
} from "react-icons/md";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section with Fixed Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
        >
          <source src="/h.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hotel Name + Motto + Booking */}
        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Leonine Villa
          </h1>
          <p className="mt-4 text-xl md:text-2xl italic drop-shadow-md">
            “Where luxury meets serenity by the sea.”
          </p>

          {/* Booking Form */}
          <div className="mt-10 bg-white bg-opacity-80 rounded-lg p-4 flex flex-wrap gap-4 justify-center items-center shadow-lg">
            <input
              type="date"
              className="px-3 py-2 border rounded-md text-black"
              placeholder="Check-in"
            />
            <input
              type="date"
              className="px-3 py-2 border rounded-md text-black"
              placeholder="Check-out"
            />
            <select className="px-3 py-2 border rounded-md text-black">
              <option>Luxury</option>
              <option>Standard</option>
              <option>Budget</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar BELOW Video Section */}
      <nav className="w-full bg-[#b3bfdc] shadow-md z-30 sticky top-0">
        <ul className="flex flex-wrap justify-center items-center gap-6 p-4 text-gray-800 font-semibold">
          <li className="hover:text-blue-600 cursor-pointer">Overview</li>
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Dining</li>
          <li className="hover:text-blue-600 cursor-pointer">Location</li>
          <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Facilities and Services
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <button className="bg-[#FFD700] hover:bg-[#FFC107] text-[#000000] flex font-bold px-6 py-2 rounded-lg transition-colors duration-200 text-[16px]">
            BOOK NOW
          </button>
        </ul>
      </nav>

      {/* Scrollable Page Content */}
      <main className="bg-white text-gray-800 px-6 py-16 w-full mx-auto ">
        {/* Hotel Overview Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: Hotel Description */}
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">Leonine Villa</h2>
            <p className="text-sm text-gray-600">
              📍 Southern Coast | +94 77 000 0000 | info@leoninevilla.com
            </p>
            <p>
              Nestled in the heart of the southern coastline, Leonine Villa is
              your serene escape into tropical elegance. Whether you’re
              traveling for business or leisure, we offer luxurious rooms,
              breathtaking sea views, and top-tier amenities to match.
            </p>
            <p>
              At Leonine Villa, our mission is to deliver world-class service
              wrapped in the charm of coastal living — with modern comforts and
              a tranquil atmosphere.
            </p>
            <p>
              Our suites include personal balconies, high-speed Wi-Fi,
              rain-showers, cable TV, tea/coffee facilities, and 24/7 service to
              make your stay unforgettable.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0">
            <img
              src="/gt.jpg"
              alt="Leonine Villa View"
              className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-blue-200 inline-block">
            Key Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center mt-6">
            {[
              { label: "Air conditioning", icon: <MdAcUnit size={28} /> },
              { label: "Cable/Satellite TV", icon: <MdTv size={28} /> },
              { label: "WiFi Internet Access", icon: <MdWifi size={28} /> },
              { label: "Tea/Coffee facilities", icon: <MdLocalCafe size={28} /> },
              { label: "Business Centre", icon: <MdBusinessCenter size={28} /> },
              { label: "Café and Restaurants", icon: <MdRestaurant size={28} /> },
              { label: "BBQ Facilities", icon: <MdOutdoorGrill size={28} /> },
              { label: "Private Balconies", icon: <MdBalcony size={28} /> },
            ].map(({ label, icon }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 bg-blue-200 rounded-full mb-3 flex items-center justify-center text-blue-700">
                  {icon}
                </div>
                <p className="text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Room, Suites & Apartments Section */}
<section className="mt-20">
  <h3 className="text-3xl font-bold mb-4">Room, Suites &amp; Apartments</h3>
  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Text content */}
    <div className="flex-1">
      <p className="mb-4">
        Cassowary Hotel has 43 hotel rooms including 6 extended stay
        apartments.
      </p>
      {/* You can add more description or links here if needed */}
    </div>

    {/* Image */}
    <div className="flex-shrink-0">
      <img
        src="/sea.jpg"
        alt="Leonine Villa View"
        className="w-[350px] h-[350px] object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


        {/* Meetings & Conferences Section */}
        <section className="mt-20">
          <h3 className="text-3xl font-bold mb-4">Meetings &amp; Conferences</h3>
          <p className="mb-4">
            Two modern meeting rooms make up the hotel meeting space hosting up
            to 60 guests when combined into one large function/meeting room.
            Aptly named after the 2 major tribes in Kiunga – Yongom and Awin.
            The meeting rooms can each host 30 people in a theatre-style or 18
            people in a boardroom style setting and are suitable for training
            sessions, workshops and private dining.
          </p>
          <a
            href="/meetings"
            className="text-blue-600 hover:underline font-semibold"
          >
            View more
          </a>
        </section>

        {/* Dining & Bars Section */}
        <section className="mt-20">
          <h3 className="text-3xl font-bold mb-4">Dining &amp; Bars</h3>
          <p>
            The Fly Breeze Restaurant – serving international and local cuisine,
            and Barramundi Bar are located near the hotel lobby and will cater
            for casual dining and all day refreshments. Enzo’s Express Pizza
            Takeaway offers its renowned pizza and ‘grab-n-go’ snacks.
          </p>
        </section>

        {/* Review Section */}
        <section className="mt-20">
          <h3 className="text-3xl font-bold mb-4">Guest Reviews</h3>
          {/* Replace below with your actual review components or markup */}
          <p className="italic text-gray-600">"Amazing stay, highly recommend!" - Jane D.</p>
          <p className="italic text-gray-600 mt-2">
            "Comfortable rooms and excellent service." - Michael S.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
