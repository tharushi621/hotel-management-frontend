import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import { FaEye, FaHandsHelping, FaHeart } from "react-icons/fa";

export default function AboutUsPage() {
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
          <source src="/ho.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4 backdrop-blur-md bg-black/30">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-2xl">
            Leonine Villa
          </h1>
          <div className="my-4 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-medium drop-shadow-lg">About Us</h2>
        </div>
      </div>

      <Navbar />

      {/* About Content */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Intro */}
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
              Where Luxury Meets Serenity
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Nestled on the Southern coast of Sri Lanka, Leonine Villa isn’t just a destination — it's a retreat into calm, luxury, and local charm.
              With personalized service, attention to detail, and an elegant setting, we create experiences that linger long after checkout.
            </p>
          </div>

          {/* Mission Section with Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="/h1.jpg"
              alt="Leonine Villa Resort"
              className="rounded-3xl shadow-xl w-full h-[440px] object-cover hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h4 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver moments of comfort and care through the perfect harmony of authentic Sri Lankan hospitality and contemporary luxury. 
                We are committed to sustainability, cultural celebration, and continuous innovation in guest satisfaction.
              </p>
            </div>
          </div>

          {/* Vision, Values, Commitment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Card
              icon={<FaEye size={30} className="text-blue-500 mb-4" />}
              title="Our Vision"
              description="To be Sri Lanka’s most beloved coastal escape — where memories are made and guests return with smiles."
            />
            <Card
              icon={<FaHandsHelping size={30} className="text-purple-500 mb-4" />}
              title="Our Values"
              description="Hospitality, sustainability, cultural pride, innovation, and excellence in every interaction."
            />
            <Card
              icon={<FaHeart size={30} className="text-pink-500 mb-4" />}
              title="Our Promise"
              description="Every stay is more than a vacation — it’s a heartfelt journey toward peace, comfort, and connection."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Modern Card Component
function Card({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1 transform">
      <div className="flex justify-center">{icon}</div>
      <h5 className="text-xl font-semibold text-gray-800 mb-2">{title}</h5>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
}
