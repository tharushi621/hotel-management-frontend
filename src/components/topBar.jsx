export default function TopBar() {
  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // ✅ Replace with your logo path
            alt="Leonine Villa Logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-semibold text-gray-700">
            Leonine Villa
          </span>
        </div>

        {/* Right: Links */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
          <a href="#destinations" className="hover:text-blue-600 transition">
            Destinations
          </a>
          <a href="#events" className="hover:text-blue-600 transition">
            Meetings & Events
          </a>
          <a href="#offers" className="hover:text-blue-600 transition">
            Special Offers
          </a>
          <a href="#contact" className="flex items-center space-x-1 hover:text-blue-600 transition">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Contact Us</span>
          </a>
          <a href="tel:+94770000000" className="hover:text-blue-600 transition">
            +94 77 000 0000
          </a>
        </div>
      </div>
    </div>
  );
}
