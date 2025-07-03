import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTripadvisor,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full">
      {/* ----------- Contact & Location Section ----------- */}
      <div className="bg-gray-100 text-black py-10 px-6 md:px-20 grid md:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="w-full">
          <iframe
            title="Cassowary Hotel Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=141.2895%2C-5.6266%2C141.3085%2C-5.6105&layer=mapnik"
            className="w-full h-80 border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact & Location</h2>
          <p className="mb-4">
            Close to the city/town center and the Kiunga – Tabubil Highway, the 7th Coral Sea branded hotel in Papua New Guinea offers 43 rooms including 6 extended stay apartments.
          </p>
          <p className="mb-2">
            <strong>Hotel: </strong>
            <a href="tel:+67571004700" className="text-blue-700 hover:underline">+675 7100 4700</a>
          </p>
          <p className="mb-2">
            <strong>Reservations: </strong>
            <a href="tel:+6753278255" className="text-blue-700 hover:underline">+675 327 8255</a>
          </p>
          <p className="mb-2">
            <strong>Email (Hotel): </strong>
            <a href="mailto:cassowary@coralseahotels.com.pg" className="text-blue-700 hover:underline">cassowary@coralseahotels.com.pg</a>
          </p>
          <p className="mb-2">
            <strong>Email (Reservations): </strong>
            <a href="mailto:cassowary_reservations@coralseahotels.com.pg" className="text-blue-700 hover:underline">cassowary_reservations@coralseahotels.com.pg</a>
          </p>

          {/* TripAdvisor Badge (Optional Image) */}
          <div className="mt-4">
            <img
              src="/tripadvisor-badge.png"
              alt="Tripadvisor Badge"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* ----------- Footer Section ----------- */}
      <footer className="bg-[#1d4ed8] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div>
            <img src="/your-logo-path.png" alt="Coral Sea Hotels" className="w-36 mb-4" />
            <p><strong>Coral Sea Hotels</strong></p>
            <p>T: <a href="tel:+6753278217" className="hover:underline">+675 327 8217</a></p>
            <p>E: <a href="mailto:sales@coralseahotels.com.pg" className="hover:underline">sales@coralseahotels.com.pg</a></p>
            <img src="/your-steamships-logo.png" alt="Steamships Logo" className="w-24 mt-4" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Meetings & Conferences</a></li>
              <li><a href="#" className="hover:underline">Restaurants & Bars</a></li>
              <li><a href="#" className="hover:underline">Reservations</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold mb-3">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Corporate Client</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="p-2 flex-1 rounded-md text-black"
              />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2025 Coral Sea Hotels. <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms and Conditions</a></p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTripadvisor /></a>
              <a href="#"><FaPhone /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}  