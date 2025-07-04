import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

export default function RoomPage() {
  return (
    <>
      <Header />

      {/* Hero Section with Background Video */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
        >
          <source src="/rooms.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Leonine Villa</h1>
          <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">Sea Villa Room Types</h2>
        </div>
      </div>

      <Navbar />

      {/* Sea Villa Room Types Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-semibold text-center mb-12">Explore Our Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <RoomCard
              image="/ov.jpg"
              title="Ocean View Deluxe"
              description="Enjoy uninterrupted ocean views, king-sized comfort, and a private balcony to watch the sunrise."
            />

            {/* Room 2 */}
            <RoomCard
              image="/gs.jpg"
              title="Garden Suite"
              description="Perfect for couples seeking peace, surrounded by lush gardens with modern comforts and elegance."
            />

            {/* Room 3 */}
            <RoomCard
              image="/sa.jpg"
              title="Extended Stay Apartment"
              description="Designed for long stays with a kitchenette, spacious living area, and all the comforts of home."
            />

            {/* Room 4 */}
            <RoomCard
              image="/bf.jpg"
              title="Beachfront Villa"
              description="Step directly onto the sand from your private veranda. Ideal for romantic getaways and serenity."
            />

            {/* Room 5 */}
            <RoomCard
              image="/fs.jpg"
              title="Family Suite"
              description="Spacious multi-room setup with connecting doors and cozy interiors for a comfortable family retreat."
            />

            {/* Room 6 */}
            <RoomCard
              image="/lp.jpg"
              title="Luxury Penthouse"
              description="Experience elevated luxury with panoramic ocean views, exclusive amenities, and private lounge access."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Reusable RoomCard Component
function RoomCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
