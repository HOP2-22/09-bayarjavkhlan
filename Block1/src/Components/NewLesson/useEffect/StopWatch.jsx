import React from "react";
import {useState , useEffect} from "react"

const StopWatch = () => {
    const [second , setSecond] = useState(0); 
    const [milli , setMilli] = useState();
    const Start = () => {
        return setSecond(second+1)
    }
    useEffect(() => {
        
    })
    return (
        <div className="bg-gray-900 flex flex-col items-center h-screen justify-center">
            <div>
                <div className="text-5xl text-white">{second}</div>
                <div className="">{milli}</div>
            </div>
            <div className="flex">
                <div className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold" onClick={() => Start()}>Start</div>
                <div className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold">Pause</div>
                <div className="border-2 border-white w-32 h-32 rounded-full flex justify-center cursor-pointer items-center text-white text-xl font-semibold">Stop</div>
            </div>
        </div>
    )
}

export default StopWatch;