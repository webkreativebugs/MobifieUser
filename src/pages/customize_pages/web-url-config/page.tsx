import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
// import {ApiConfigInputField} from "../../../components/module/project_component/ConfigComponents/app/ApiConfigInputField" 
// import { WebViewNavigationURL } from "../../../data/CustomizeData/ClientConfiguration"
const page = () => {
  return (
    <AppConfigMask displayName={ConfigTypeEnums.WEB}>
      <>
      {/* {WebViewNavigationURL.map(())

      } */}
      </>
    </AppConfigMask>
    
  )
}

export default page
