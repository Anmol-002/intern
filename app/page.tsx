import { ModeToggle } from "@/components/DarkMode"
import Lower from "@/components/Lower"
import Upper from "@/components/Upper"

const page = () => {
  return (
    <div className="p-11">
      <div className="absolute top-0 right-0 p-5 ">
        <ModeToggle />
      </div>
      <div className="flex flex-col">
        <div>
          <Lower />
        </div>
        <div>
            <Upper />
          </div>
      </div>
    </div>
  )
}

export default page
