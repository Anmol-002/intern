import Card from "./Card"
import { Button } from "@/components/ui/button"
import d from "./constants/Udetails"
import Image from "next/image"
const Lower = () => {
  return (

    <div className="pt-6 max-w-[90vw] w-full flex flex-col gap-2">
      <div className=" ml-10 md:ml-16 sm:ml-20 flex justify-between ">
        <div>
          <h1 className="text-2xl font-bold ">Sports</h1>
          <div className="mt-2 border-b-4 border-[#738FFF] border-solid"> </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap justify-center gap-3.5 p-4">
        {d.map((item) => (
          <Card key={item.name} image={item.image} name={item.name} heading={item.heading} event={item.event} />
        ))}
        <div className="bg-white shadow-[0px_8px_16px_0px_#0000000D]  max-h-[511px] w-[238px] p-3 dark:bg-[#3B3E47]">
          <div className="border-2 border-[##006554] border-solid w-full h-full dark:border-none">
            <div className="relative h-[218px] w-full overflow-hidden">
              <div className="absolute bg-black text-white top-0 right-0 z-[999] font-bold text-xs px-[15px] py-[3px]">Ad</div>
              <Image src="https://drive.google.com/thumbnail?id=1p2pUJHxTUDNkjbEdWO6HieMB8cf2d1-k&sz=w1000" width={230} height={200} alt='' className='absolute top-0' />
            </div>
            <div className="flex flex-col gap-3 p-3 flex-1 ">
              <h2 className="font-semibold text-xl dark:text-white">
                Advertisement title
              </h2>
              <p className="text-[#525965] text-xs dark:text-[#DFDFDF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center m-4">
        <Button className="bg-[#2C9CF0] mb-6">See More</Button>
      </div>
    </div>
  )
}

export default Lower
