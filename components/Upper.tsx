"use client"
import { ChevronRight } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import LowerCard from "./LowerCard"
import data from "./constants/Ldetails"


const Upper = () => {
  return (
    <div className="max-w-[90vw] w-full flex flex-col p-6 gap-16 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] max-sm:px-0 m-auto">
      <div className="flex flex-col justify-center m-0">
        <h1 id="title" className="text-[50px] sm:text-[40px] font-bold  text-center mb-4">Collection Spotlight</h1>
        <p className="text-sm text-center sm:p-2">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div>
      <div className="flex items-center w-full justify-between gap-2 mb-10 overflow-hidden">
        <button className="flex h-[30px] sm:h-[50px] border-[1px] border-[#2C9CF0] items-center justify-center overflow-hidden">
          <ChevronLeft color="#2c9cf0" size={32} />
        </button>
        <div className="flex gap-10 flex-wrap justify-center overflow-hidden">
          {data.map((item) => (
            <LowerCard key={item.name} name={item.name} image={item.image} booking={item.booking} place={item.place} />
          ))}
        </div>
        <button className="flex h-[30px] sm:h-[50px] border-[1px] border-[#2C9CF0] items-center justify-center overflow-hidden">
          <ChevronRight color="#2c9cf0" size={32} />
        </button>
      </div>
    </div>
  )
}

export default Upper
