import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

export default function DiningPage() {
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
          <source src="/food.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Leonine Villa</h1>
          <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">Dining & Bars</h2>
        </div>
      </div>

      <Navbar />

      {/* Dining Options Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-semibold text-center mb-12">Savor Every Bite</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DiningCard
              image="/fd.jpg"
              title="Fine Dining Restaurant"
              description="Experience exquisite flavors in our signature restaurant offering gourmet cuisine and an elegant setting."
            />
            <DiningCard
              image="/pb.jpg"
              title="Poolside Bar"
              description="Sip on tropical cocktails and light snacks while relaxing by the infinity pool under palm shades."
            />
            <DiningCard
              image="/sgt.jpg"
              title="Sea Grill Terrace"
              description="Indulge in freshly grilled seafood by the ocean breeze with panoramic views of the coastline."
            />
            <DiningCard
              image="/b.jpg"
              title="Sunrise Breakfast Lounge"
              description="Begin your day with a curated breakfast buffet featuring international and local delicacies."
            />
            <DiningCard
              image="/l.jpg"
              title="Lobby Bar"
              description="Unwind with a crafted beverage in our cozy lounge — perfect for evenings and quiet conversations."
            />
            <DiningCard
              image="/p.jpg"
              title="Private Dining"
              description="Celebrate special moments with customized menus in an intimate setting, served with perfection."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Reusable Dining Card Component
function DiningCard({ image, title, description }) {
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
          Reserve Table
        </a>
      </div>
    </div>
  );
}
