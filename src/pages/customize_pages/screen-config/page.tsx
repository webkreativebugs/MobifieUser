// import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
// import DragAndDrop from "../../../components/module/project_component/ConfigComponents/app/DragAndDrop"
// import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
// import { ScreenDesignConfiguration } from "../../../../constants/ScreenDesignConfiguration"
// import { ScreenDesignConfiguration } from "../../../data/CustomizeData/ClientConfiguration"
import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask"
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask"
const page = () => {
  return (
    <CustomizeMask
      name={CustomizeDashboardTypeEnums.SCREEN}
    
    >
      <HeadingMask name="Screen"><></></HeadingMask>
      <>
       
      </>
    </CustomizeMask>
  )
}

export default page
