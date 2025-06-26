import {useState} from "react"

export default function TestComponent(){

    const [num,setNum]=useState(0)

    return(
        <div className="w-full h-[100vh] bg-red-800 flex justify-center items-center">
            <div className="bg-white w-[350px] h-[350px] flex justify-center items-center ">
                <button className="w-[50px] h-[50px] bg-blue-700 rounded-full text-2xl text-white text-center"
                onClick={()=>{
                   const newNum = num-1
                   setNum(newNum)
                }}>
                    -
                </button>
                <span className="text-6xl">
                   {num}
                </span>
                <button className="w-[50px] h-[50px] bg-blue-700 rounded-full text-2xl text-white text-center"
                onClick={()=>{
                    const newNum = num+1
                    setNum(newNum)
                }}
                >
                    +
                </button>
            </div>
            
        </div>
    )
}