import { BrowserRouter, Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage.jsx";
import HomePage from "./pages/client/homePage.jsx";
import LoginPage from "./pages/login/login.jsx";
 {/* import TestComponent from "./components/test/test.jsx";*/}

function App() {

  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {/* <Route path="/test" element={<TestComponent/>}/> */}
        <Route path="/*" element={<HomePage/>}/>      
      </Routes>
    </BrowserRouter>
  )
}

export default App;
