import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
const page = () => {
  return (
    <AppConfigMask displayName={ConfigTypeEnums.API}>
        <>
        HEllo
        </>
      
    </AppConfigMask>
  )
}

export default page
