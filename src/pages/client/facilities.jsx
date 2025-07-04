import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

export default function FacilitiesPage() {
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
          <source src="/fac.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Leonine Villa</h1>
          <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-semibold drop-shadow-lg">World-Class Facilities</h2>
        </div>
      </div>

      <Navbar />

      {/* Facilities Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-semibold text-center mb-12">Comfort Meets Convenience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <FacilityCard
              image="/a.jpg"
              title="Air Conditioning"
              subtitle="Individual room temperature control"
            />

            <FacilityCard
              image="/tv.jpg"
              title="Cable & Smart TV"
              subtitle="Smart TV with streaming services"
            />

            <FacilityCard
              image="/wi.jpg"
              title="WiFi Access"
              subtitle="Complimentary fiber internet"
            />

            <FacilityCard
              image="/tea.jpg"
              title="Tea & Coffee"
              subtitle="Premium beverage selection"
            />

            <FacilityCard
              image="/bc.jpg"
              title="Business Centre"
              subtitle="Modern workspace facilities"
            />

            

            <FacilityCard
              image="/bbq.jpg"
              title="BBQ Area"
              subtitle="Outdoor grilling area"
            />

            <FacilityCard
              image="/pri.jpg"
              title="Private Balconies"
              subtitle="Ocean and garden views"
            />

            {/* Extra Facility Example */}
            <FacilityCard
              image="/spa.jpg"
              title="Luxury Spa"
              subtitle="Signature wellness and treatments"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Reusable FacilityCard Component
function FacilityCard({ image, title, subtitle }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h4 className="text-2xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
