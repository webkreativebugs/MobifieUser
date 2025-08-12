import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask"
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask"
const page = () => {
  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.APP}>
     <HeadingMask name={"App config"} >
      <>
      </>

     </HeadingMask>
      
    </CustomizeMask>
  )
}

export default page
