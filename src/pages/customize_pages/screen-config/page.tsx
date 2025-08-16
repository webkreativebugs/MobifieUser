import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import DragAndDrop from "../../../components/module/project_component/ConfigComponents/app/DragAndDrop"
// import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
const page = () => {
  return (

       <AppConfigMask displayName={"Screen"}>
      <>
        <DragAndDrop/>
      </>
    </AppConfigMask>
    
  )
}

export default page
