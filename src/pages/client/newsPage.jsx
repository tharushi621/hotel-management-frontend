import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

export default function NewsPage() {
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
          <source src="/new.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4 backdrop-blur-sm bg-black/30">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">Leonine Villa</h1>
        <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-medium drop-shadow-lg">Latest News & Updates</h2>
        </div>
      </div>

      <Navbar />

      {/* News Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <h3 className="text-4xl font-bold text-center text-gray-800">Stay Updated with Leonine Villa</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                image={item.image}
                title={item.title}
                date={item.date}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// News Card Component
function NewsCard({ image, title, date, description, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 space-y-3">
        <p className="text-sm text-gray-500">{date}</p>
        <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
        <a
          href={link}
          className="inline-block text-blue-600 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

// Sample News Data (you can fetch this from API or CMS later)
const newsItems = [
  {
    image: "/u.jpeg",
    title: "Leonine Villa Wins Best Coastal Retreat 2025",
    date: "July 2, 2025",
    description: "Our resort has been awarded for excellence in luxury and sustainable tourism in Sri Lanka.",
    link: "#",
  },
  {
    image: "/we.jpg",
    title: "New Oceanfront Dining Pavilion Now Open",
    date: "June 20, 2025",
    description: "Experience gourmet seaside dining at our newest venue offering breathtaking sunset views.",
    link: "#",
  },
  {
    image: "/su.jpg",
    title: "Exclusive Summer Wellness Packages Launched",
    date: "June 5, 2025",
    description: "Relax and rejuvenate with our spa, yoga, and wellness retreat packages this season.",
    link: "#",
  },
];
