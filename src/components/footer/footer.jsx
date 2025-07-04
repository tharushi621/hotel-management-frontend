import { MdPhone, MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Main Contact */}
          <div>
            <h4 className="text-3xl font-light mb-6">Leonine Villa</h4>
            <p className="text-gray-300 mb-6">
              <strong>Luxury Coastal Resort</strong>
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <MdPhone />{" "}
                <a href="tel:+94770000000" className="hover:underline hover:text-white">
                  +94 77 000 0000
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MdEmail />{" "}
                <a href="mailto:info@leoninevilla.com" className="hover:underline hover:text-white">
                  info@leoninevilla.com
                </a>
              </p>
            </div>
            <div className="mt-6 bg-white/10 p-4 rounded-2xl w-fit">
              <p className="text-sm font-medium">Premium Hospitality</p>
              <p className="text-xs text-gray-400">Sri Lankan Excellence</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-6 text-xl">Quick Links</h5>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#rooms" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Rooms & Suites</a></li>
              <li><a href="#dining" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Dining</a></li>
              <li><a href="#facilities" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Facilities</a></li>
              <li><a href="#" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Meetings & Events</a></li>
              <li><a href="#" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Gallery</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h5 className="font-semibold mb-6 text-xl">About Us</h5>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#overview" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">About Leonine Villa</a></li>
              <li><a href="#" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Corporate Clients</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-200 hover:translate-x-1 inline-block">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-semibold mb-6 text-xl">Stay Connected</h5>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              <p>&copy; 2024 Leonine Villa. All rights reserved. | 
                <a href="#" className="hover:text-white ml-1 transition-colors">Privacy Policy</a> | 
                <a href="#" className="hover:text-white ml-1 transition-colors">Terms & Conditions</a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-white font-bold text-sm">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <span className="text-white font-bold text-sm">yt</span>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <span className="text-white font-bold text-sm">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="text-white font-bold text-sm">t</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
