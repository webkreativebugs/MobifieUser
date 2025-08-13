import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
const page = () => {
  return (
    <AppConfigMask displayName={ConfigTypeEnums.DEFAULT}>
        <></>
      
    </AppConfigMask>
  )
}

export default page
