import { ReactNode } from "react"
import Sidebar from "../Sidebar"

interface Name {
    name:string,
    children:ReactNode
}

const DashboardMask = ({name,children}:Name) => {
  return (
     <div className=" flex">
     <Sidebar active={name}/>
       <div className="w-screen  flex items-center  h-screen">
        <div className=" p-6  h-5/6 w-full overflow-auto ">
          <div className="  gap-4">
            {children}
          </div>
        </div>
       </div>
    </div>
  )
}

export default DashboardMask
