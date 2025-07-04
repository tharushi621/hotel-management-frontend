import { useState } from "react";
import {
  MdAcUnit,
  MdTv,
  MdWifi,
  MdLocalCafe,
  MdBusinessCenter,
  MdRestaurant,
  MdOutdoorGrill,
  MdBalcony,
  MdArrowForward,
  MdStar,
  MdLocationOn,
  MdPhone,
  MdEmail,
} from "react-icons/md";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header"; 
import Navbar from "../../components/navbar/navbar";
import Contact from "../../components/contact/contact";

const eventImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
];

const reviewImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b332c5de?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
];

const reviews = [
  { name: "Jane D.", text: "Exceptional service and breathtaking ocean views. A truly luxurious experience.", rating: 5 },
  { name: "Michael S.", text: "Immaculate rooms with world-class amenities. The staff exceeded all expectations.", rating: 5 },
  { name: "Anna K.", text: "Perfect blend of modern luxury and coastal charm. Highly recommended!", rating: 5 },
];

export default function HomePage() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const nextEvent = () => setCurrentEvent((currentEvent + 1) % eventImages.length);
  const prevEvent = () => setCurrentEvent((currentEvent - 1 + eventImages.length) % eventImages.length);

  const nextReview = () => setCurrentReview((currentReview + 1) % reviews.length);
  const prevReview = () => setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);

  return (
    <>
      <Header/>

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
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Leonine Villa</h1>
          <p className="mt-4 text-xl md:text-2xl italic drop-shadow-md">
            “Where luxury meets serenity by the sea.”
          </p>
          <div className="mt-10  backdrop-blur-2xl bg-opacity-80 rounded-lg p-4 flex flex-wrap gap-4 justify-center items-center shadow-lg">
            <input type="date" className="px-3 py-2 border rounded-md text-black" />
            <input type="date" className="px-3 py-2 border rounded-md text-black" />
            <select className="px-3 py-2 border rounded-md text-black">
              <option>Luxury</option>
              <option>Standard</option>
              <option>Budget</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Now</button>
          </div>
        </div>
      </div>

      <Navbar/>

      {/* Overview Section (modern styling from second code) */}
      <section id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-light mb-4">Leonine Villa</h2>
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <MdLocationOn className="text-blue-600" />
                    <span>Southern Coast</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdPhone className="text-blue-600" />
                    <span>+94 77 000 0000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdEmail className="text-blue-600" />
                    <span>info@leoninevilla.com</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Leonine Villa is your serene escape into tropical elegance with luxurious rooms, sea views, and top-tier amenities.
                </p>
                <p>
                  Our mission is to deliver world-class service wrapped in the charm of coastal living — with modern comforts.
                </p>
                <p>
                  Suites include balconies, Wi-Fi, rain-showers, cable TV, tea/coffee facilities, and 24/7 service.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-100 rounded-full opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80" 
                alt="Leonine Villa" 
                className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section (modern styling from second code) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">Key Amenities</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every detail has been carefully curated to ensure your comfort and convenience during your stay.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <MdAcUnit size={32} />, label: "Air conditioning", desc: "Individual room temperature control" },
              { icon: <MdTv size={32} />, label: "Cable TV", desc: "Smart TV with streaming services" },
              { icon: <MdWifi size={32} />, label: "WiFi Access", desc: "Complimentary fiber internet" },
              { icon: <MdLocalCafe size={32} />, label: "Tea/Coffee", desc: "Premium beverage selection" },
              { icon: <MdBusinessCenter size={32} />, label: "Business Centre", desc: "Modern workspace facilities" },
              { icon: <MdRestaurant size={32} />, label: "Restaurants", desc: "Award-winning dining venues" },
              { icon: <MdOutdoorGrill size={32} />, label: "BBQ", desc: "Outdoor grilling area" },
              { icon: <MdBalcony size={32} />, label: "Balconies", desc: "Ocean and garden views" },
            ].map(({ icon, label, desc }, i) => (
              <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 mx-auto group-hover:shadow-lg transition-shadow">
                  {icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{label}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section (modern styling from second code) */}
      <section id="rooms" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-light mb-6">Rooms, Suites & Apartments</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Cassowary Hotel offers 43 rooms, including 6 extended-stay apartments for comfort and convenience.
                </p>
                <p className="text-gray-600 mb-8">
                  Modern amenities with a tropical luxury twist await every guest.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Luxury suites with private balconies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Extended-stay apartments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Modern amenities and premium finishes</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <span>View More</span>
                <MdArrowForward />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Room" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">43</div>
                  <div className="text-sm text-gray-600">Premium Rooms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Slideshow (from first code with modern styling) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">Highlights from Our Events</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the memorable moments and exceptional experiences that make Leonine Villa special.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={eventImages[currentEvent]} 
                className="w-full h-[500px] object-cover transition-all duration-500" 
                alt="Event Highlight" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between">
              <button 
                onClick={prevEvent} 
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
              >
                <span className="text-xl">←</span>
              </button>
              <button 
                onClick={nextEvent} 
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
            
            <div className="flex justify-center mt-6 space-x-3">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentEvent ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Section (modern styling from second code) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/me.jpg" 
                alt="Meeting Room" 
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl font-light mb-6">Meetings & Conferences</h3>
              <p className="text-lg text-gray-700 mb-6">
                Two modern meeting rooms host up to 60 guests combined. Named after Yongom and Awin tribes, ideal for workshops and private dining.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Capacity for up to 60 guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Modern audiovisual equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Catering and private dining options</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <span>View More</span>
                <MdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section (modern styling from second code) */}
      <section id="dining" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-light mb-6">Dining & Bars</h3>
              <p className="text-lg text-gray-700 mb-6">
                Fly Breeze Restaurant and Barramundi Bar serve international/local cuisine and refreshments. Enzo's Pizza offers takeaway snacks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Fly Breeze Restaurant</h4>
                  <p className="text-sm text-gray-600">International and local cuisine</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Barramundi Bar</h4>
                  <p className="text-sm text-gray-600">Signature cocktails and beverages</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Enzo's Pizza</h4>
                  <p className="text-sm text-gray-600">Fresh pizza and quick bites</p>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <span>View More</span>
                <MdArrowForward />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/gg.jpg" 
                alt="Fine Dining" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Dining Venues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews (modern styling from second code) */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-4">What Guests Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our valued guests about their exceptional experiences at Leonine Villa.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img 
                    src={reviewImages[currentReview]} 
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg" 
                    alt="Guest"
                  />
                </div>
                
                <div className="md:col-span-2 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <MdStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-800 mb-4 italic leading-relaxed">
                    "{reviews[currentReview].text}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    — {reviews[currentReview].name}
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-4">
                <button 
                  onClick={prevReview} 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-xl">←</span>
                </button>
                <button 
                  onClick={nextReview} 
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentReview ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-5xl font-light text-white mb-6">
              Ready to Experience
              <span className="block font-medium">Luxury Beyond Compare?</span>
            </h3>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Book your stay at Leonine Villa today and discover why our guests return time and time again. 
              Your perfect escape awaits on the pristine shores of Sri Lanka's Southern Coast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Gallery
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="space-y-2">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-white/80">Guest Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Happy Guests</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80">Concierge Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Contact/>
      <Footer />
 </>
  );
}