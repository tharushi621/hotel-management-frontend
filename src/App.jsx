import { BrowserRouter, Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage.jsx";
import HomePage from "./pages/client/homePage.jsx";
import LoginPage from "./pages/login/login.jsx";
import RoomPage from "./pages/client/roomPage.jsx";
import DiningPage from "./pages/client/diningPage.jsx";
import FacilitiesPage from "./pages/client/facilities.jsx";
import AboutUsPage from "./pages/client/aboutPage.jsx";
import Contact from "./components/contact/contact.jsx";
import ContactPages from "./pages/client/contacts.jsx";
import NewsPage from "./pages/client/newsPage.jsx";
 {/* import TestComponent from "./components/test/test.jsx";*/}

function App() {

  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {/* <Route path="/test" element={<TestComponent/>}/> */}
        <Route path="/*" element={<HomePage/>}/>      
        <Route path="/rooms" element={<RoomPage/>}/>
        <Route path="/dining" element={<DiningPage/>}/>
        <Route path="/facilities" element={<FacilitiesPage/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
         <Route path="/news" element={<NewsPage/>}/>
        <Route path="/contact" element={<ContactPages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
