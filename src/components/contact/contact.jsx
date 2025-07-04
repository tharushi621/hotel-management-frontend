import { MdPhone, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <h2 className="text-4xl font-light mb-6">Contact & Location</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Located along the pristine Southern Coast of Sri Lanka, Leonine Villa offers easy access to local attractions while providing a tranquil retreat from the everyday. Our luxury coastal resort features 43 elegantly appointed rooms including 6 extended-stay apartments.
          </p>

          <div className="space-y-4">
            {/* Hotel Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MdPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Hotel</p>
                <a href="tel:+94770000000" className="text-blue-600 hover:underline text-lg">
                  +94 77 000 0000
                </a>
              </div>
            </div>

            {/* Reservations Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MdPhone className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Reservations</p>
                <a href="tel:+94770000001" className="text-purple-600 hover:underline text-lg">
                  +94 77 000 0001
                </a>
              </div>
            </div>

            {/* General Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MdEmail className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">General Inquiries</p>
                <a href="mailto:info@leoninevilla.com" className="text-green-600 hover:underline text-lg">
                  info@leoninevilla.com
                </a>
              </div>
            </div>

            {/* Reservations Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <MdEmail className="text-orange-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Reservations</p>
                <a href="mailto:reservations@leoninevilla.com" className="text-orange-600 hover:underline text-lg">
                  reservations@leoninevilla.com
                </a>
              </div>
            </div>
          </div>

          {/* TripAdvisor Badge */}
          <div className="pt-6">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-md w-fit">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Excellent Reviews</p>
                <p className="text-sm text-gray-600">TripAdvisor Certificate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Embedded Google Map */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Leonine Villa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126740.82955896114!2d80.16605716815525!3d6.033694124749525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fb2163bc0ab%3A0xd6781e80c978d6cc!2sSouthern%20Province%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1720066600000!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
