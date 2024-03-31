import Image from 'next/image'
import s from "../images/s.png"
const LowerCard = ({ image, name, booking, place }: any) => {
    return (
        <div className="overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white h-[625px] max-w-[257px] p-3 flex flex-col justify-between dark:bg-[#3B3E47]">
            <div className=" relative  h-[385px] w-[300px] flex items-center overflow-hidden sm:h-[350px]">
                {/* <div className='relative h-full w-full'> */}
                <Image src={image} width={300} height={385} alt={name} className='absolute right-8' />
                {/* </div> */}
            </div>
            <div className='relative flex justify-between items-center'>
                <div className='absolute -left-7 h-[30px] w-[30px] rounded-full bg-[#F3F8FD] dark:bg-[#1F1F2C]'></div>
                <div className='flex gap-1 items-center px-4'>
                    <div className="border-b w-[3px] border-[#818A97] "></div>
                    {/* <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div> */}
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[8px] border-[#818A97] "></div>
                    <div className="border-b w-[3px] border-[#818A97] "></div>
                </div>
                <div className='absolute h-[30px] -right-7 w-[30px] rounded-full bg-[#F3F8FD] dark:bg-[#1F1F2C]'></div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-center font-medium text-[17px]">
                    {name}
                </h2>
                <div className="flex flex-col items-center gap-2">
                    <div className="flex text-sm items-center gap-2">
                        <span>OCT 15</span>
                        <div className="h-[14px] w-[1px] bg-black dark:bg-white">
                        </div>
                        <span>SUN</span>
                        <div className="h-[14px] w-[1px] bg-black dark:bg-white">
                        </div>
                        <span>4:30 PM</span>
                    </div>
                    <p className="text-sm text-[#525965] text-center dark:text-[#DFDFDF]">
                        {place}
                    </p>
                </div>
                <button className="bg-[#1D1D1F] text-white text-center w-full text-sm p-3">
                    {booking}
                </button>
            </div>
        </div>
    )
}

export default LowerCard
