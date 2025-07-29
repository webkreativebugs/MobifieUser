import Themes from "./Themes"
import ColorPicker from "./ColorPicker"
const ThemePicker = () => {
  return (
    <div>
         <div className="mt-2">
                <h1 className="table-heading pl-2">Themes</h1>
              </div>
      <Themes/>
      <ColorPicker/>
    </div>
  )
}

export default ThemePicker
