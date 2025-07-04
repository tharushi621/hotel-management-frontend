import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import { MdPhone, MdEmail } from "react-icons/md";

export default function ContactPages() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
        >
          <source src="/con.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center text-white px-4 backdrop-blur-sm bg-black/30">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">Leonine Villa</h1>
         <hr className="my-4 border-t-2 border-gray-300 w-1/2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-medium drop-shadow-lg">Contact & Location</h2>
        </div>
      </div>

      <Navbar />

      {/* Contact Info + Map */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Located along the Southern Coast of Sri Lanka, Leonine Villa offers easy access to pristine beaches and vibrant culture. Reach out to us for reservations, special events, or general inquiries.
            </p>

            <ContactItem
              icon={<MdPhone className="text-blue-600 text-xl" />}
              label="Hotel"
              content="+94 77 000 0000"
              link="tel:+94770000000"
            />
            <ContactItem
              icon={<MdPhone className="text-purple-600 text-xl" />}
              label="Reservations"
              content="+94 77 000 0001"
              link="tel:+94770000001"
            />
            <ContactItem
              icon={<MdEmail className="text-green-600 text-xl" />}
              label="General Inquiries"
              content="info@leoninevilla.com"
              link="mailto:info@leoninevilla.com"
            />
            <ContactItem
              icon={<MdEmail className="text-orange-600 text-xl" />}
              label="Reservations"
              content="reservations@leoninevilla.com"
              link="mailto:reservations@leoninevilla.com"
            />
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Leonine Villa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63339.22654292065!2d80.0019454!3d6.1286066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae170deff1a31c7%3A0x9e8699e8e1f77d6a!2sGalle%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1658471703777"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Send Us a Message</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="md:col-span-2 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Contact Info Card
function ContactItem({ icon, label, content, link }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{label}</p>
        <a href={link} className="text-blue-600 hover:underline text-lg">
          {content}
        </a>
      </div>
    </div>
  );
}
