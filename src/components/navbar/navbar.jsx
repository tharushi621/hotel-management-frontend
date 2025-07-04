export default function Navbar(){
    return(
        <>
      <nav className="w-full bg-[#70c9e4] shadow-md sticky top-0 z-30">
        <ul className="flex flex-wrap justify-center items-center gap-6 p-4 text-gray-800 font-semibold">
          <li className="hover:text-blue-600 cursor-pointer">Overview</li>
          <li className="hover:text-blue-600 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-600 cursor-pointer">Dining</li>
          <li className="hover:text-blue-600 cursor-pointer">Location</li>
          <li className="hover:text-blue-600 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-600 cursor-pointer">Facilities</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <button className="bg-[#FFD700] hover:bg-[#FFC107] text-black px-6 py-2 rounded-lg font-bold">BOOK NOW</button>
        </ul>
      </nav>
        </>
    )
}