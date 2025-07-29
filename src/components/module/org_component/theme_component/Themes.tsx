import { themes } from '../../../../data/ThemeSection'
import { useTheme } from '../../../../context/AppContext'
const Themes = () => {
    const {onThemeChange} = useTheme()
    const handleClick = (id:string) =>{
      onThemeChange(id)
    }
  return (
    <div className='flex '>
      {
        themes.map((theme,id)=>(
            <button key={id} className={` h-[8rem] w-[8rem] m-3 `  }  style={{ backgroundColor: theme.themeColor }} onClick={()=>handleClick(theme.id)} />
             
        ))
      }
    </div>
  )
}

export default Themes
