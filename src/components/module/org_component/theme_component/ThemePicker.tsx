import Themes from "./Themes"
// import ColorPicker from "./ColorPicker"
// import { useState } from "react"
const ThemePicker = () => {
  // const [colorPicker , setColorPicker ] = useState("")
  return (
    <div className="bg-white">
         <div className="mt-2 ">
                <h1 className="table-heading pl-2">Themes</h1>
              </div>
      <Themes/>
      {/* <ColorPicker colorPicker={colorPicker} /> */}
    </div>
  )
}

export default ThemePicker
