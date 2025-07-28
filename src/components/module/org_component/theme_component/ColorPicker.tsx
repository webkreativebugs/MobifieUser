import { useTheme } from "../../../../context/AppContext"

interface Color{
    id: string,
    name:string,
    secondaryColor: string,           
    secondaryInverseColor:string
}
function ColorPicker({colorPicker}:any) {
    const {onColorChange} = useTheme()
    const handleClick = (color:Color) =>{
     onColorChange(color.id)
    }
    
  return (
      <div className='flex '>
         {
          colorPicker && colorPicker?.map((color:Color,id:number)=>(
               <button key={id} className={` h-[4rem] w-[4rem] m-3 `  }  style={{ backgroundColor: color.secondaryColor }} onClick={()=>handleClick(color)} />
                
           ))
         }
       </div>
  )
}

export default ColorPicker
