import { themes } from '../../../../data/ThemeSection'
import { useTheme } from '../../../../context/AppContext'
import ColorPicker from './ColorPicker'
import { useEffect, useState } from 'react'

interface Theme {
   
      name: string,
      themeColor: string,
      light:string,
      dark:string  
}
const Themes = () => {
    const {theme,onThemeChange} = useTheme()
    const [variant , setVariant] = useState("light");
    useEffect(()=>{
       setVariant( theme.split('-')[1])
    },[])
    useEffect(()=>{
        
         if( variant ==="light")
      {
        onThemeChange(`${ theme.split('-')[0]}-light`) 
        console.log(`${ theme.split('-')[0]}-light`);
        
      }
      else
        onThemeChange(`${ theme.split('-')[0]}-dark`) 
      console.log(`${ theme.split('-')[0]}-dark`);
    
      
    },[variant])
    
    const handleClick = (theme:Theme) =>{
      // onThemeChange(theme.id)
     if( variant ==="light")
      {
        onThemeChange(theme.light) 
      }
      else
        onThemeChange(theme.dark)
    }
  return (
    <>
    <div className='flex justify-between '>
      {
        themes.map((theme,id)=>(
            <button key={id} className={` h-[4rem] w-[4rem] m-3 `  }  style={{ backgroundColor: theme.themeColor }} onClick={()=>handleClick(theme)} />
             
        ))
      }
      <div>
      <select
    name="variant"
    value={variant}
  onChange={(e) => setVariant(e.target.value)}
  className="border px-2 py-1 rounded"
  >
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  </select>
      </div>
    </div>
    {/* <ColorPicker variant={} /> */}
    </>
  )
}

export default Themes
