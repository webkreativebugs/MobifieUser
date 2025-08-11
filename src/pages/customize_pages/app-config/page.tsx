import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask"
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
const page = () => {
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.APP}>
      {
        [0,1,2,3,4,5,].map(()=>(
         <div className="w-52 h-60 p-5 m-5 mt-0 pt-0 bg-black">
        
        </div>
        ))
      
      }
      
    </CustomizeMask>
  )
}

export default page
