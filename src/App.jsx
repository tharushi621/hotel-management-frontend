import { BrowserRouter, Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage.jsx";
import HomePage from "./pages/client/homePage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/*" element={<HomePage/>}/>      
      </Routes>
    </BrowserRouter>
  )
}

export default App;
