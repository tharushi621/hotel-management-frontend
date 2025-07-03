import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

export default function HomePage(){
    return(
    <>
     <Header/>
    <div className="w-full h-screen bg-blue-800 flex flex-col items-center">
      <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex items-center justify-center">
        <input type="date"/>
        <input type="date"/>
        <select>
          <option>Luxury</option>
          <option>Normal</option>
          <option>Low</option>
        </select>
        <button>Book Now</button>
      </div>
      <div>
        <h1 className="text-white text-[50px]">
          Welcome to the Leonine Villa
        </h1>
      </div>
    </div>
    <Footer/>
    </>
    )
}