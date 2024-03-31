import Image from 'next/image'
import s from "../images/s.png"
const Card = ({ image, name, heading, event }: any) => {
    return (
        <div className='  max-h-[511px] w-[238px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white dark:bg-[#3B3E47] p-3 flex flex-col justify-center md:w-auto items-center '>
                    <div className='flex items-center flex-col'>
                        <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                            <Image src={image} width={200} height={700} alt='' />
                        </div>
                        <h2 className="text-lg self-start capitalize font-semibold py-1.5">{heading}</h2>
                    </div>
                    <div className=" dark:bg-[#292B32] bg-[#F7F7F8] pt-1 h-[54px] w-full rounded-md flex justify-around">
                        <div>
                            <p className="text-sm opacity-60">
                                Total Events
                            </p>
                            <p>
                                {event} Events
                            </p>
                        </div>
                        <div>
                            <p className="text-sm opacity-60">
                                Sports
                            </p>
                            <p>{name}</p>
                        </div>
                    </div>
        </div>
    )
}

export default Card
