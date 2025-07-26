import { secondaryBackgroundColors } from "../../../../data/ColorSection" 
import { useTheme } from "../../../../context/AppContext"
function ColorPicker() {
    const {onColorChange} = useTheme()
    const handleClick = (id:string) =>{
     onColorChange(id)
    }
  return (
      <div className='flex '>
         {
           secondaryBackgroundColors.map((color,id)=>(
               <button key={id} className={` h-[4rem] w-[4rem] m-3 `  }  style={{ backgroundColor: color.color }} onClick={()=>handleClick(color.id)} />
                
           ))
         }
       </div>
  )
}

export default ColorPicker
