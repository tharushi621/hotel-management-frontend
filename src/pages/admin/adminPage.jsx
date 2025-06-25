import { Link, Routes, Route } from "react-router-dom";
import {
    FaClipboardList,
    FaHotel,
    FaUserFriends,
    FaRegCommentDots,
    FaPhotoVideo,
    FaThList
} from "react-icons/fa";
import AdminBooking from "./bookings";
import AdminCategories from "./categories";
import AdminRooms from "./rooms";
import AdminUsers from "./users";
import AdminFeedback from "./feedback";
import AdminGalleryItems from "./galleryItems";

export default function AdminPage() {
    return (
        <div className="w-full max-h-[100vh] flex">

            <div className="w-[20%] bg-pink-600 h-[100vh] flex flex-col p-4 space-y-6">

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/bookings"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaClipboardList />
                        <span>Bookings</span>
                    </Link>
                </div>

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/categories"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaThList />
                        <span>Categories</span>
                    </Link>
                </div>

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/rooms"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaHotel />
                        <span>Rooms</span>
                    </Link>
                </div>

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/users"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaUserFriends />
                        <span>Users</span>
                    </Link>
                </div>

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/feedbacks"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaRegCommentDots />
                        <span>Feedbacks</span>
                    </Link>
                </div>

                <div className="hover:bg-pink-700 p-2 rounded">
                    <Link
                        to="/admin/galleryItems"
                        className="flex items-center space-x-2 text-white text-[24px] hover:text-[30px] hover:text-black hover:font-bold transition-all duration-200"
                    >
                        <FaPhotoVideo />
                        <span>Gallery Items</span>
                    </Link>
                </div>
            </div>

            <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-orange-600 p-6">
                <Routes>
                    <Route path="/bookings" element={<AdminBooking/>} />
                    <Route path="/categories" element={<AdminCategories/>} />
                    <Route path="/rooms" element={<AdminRooms/>} />
                    <Route path="/users" element={<AdminUsers/>} />
                    <Route path="/feedbacks" element={<AdminFeedback/>} />
                    <Route path="/galleryitems" element={<AdminGalleryItems/>} />
                </Routes>
            </div>
        </div>
    );
}
