
import { ReactNode } from "react"


interface Name {
    name:string,
    children:ReactNode
}
const HeadingMask = ({name,children}:Name) => {
  return (
     <div className="flex justify-between">
       <div><h1 className="table-heading pl-2">{name}</h1></div>
        <div className=" flex justify-between w-1/4 gap-2  ">
         {children}
        </div>
    </div>
  )
}

export default HeadingMask
