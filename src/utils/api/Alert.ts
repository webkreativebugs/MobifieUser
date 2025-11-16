// import {accessManager} from "../../../network/public/accessManager_api/AccessManager.api"
import { fetchAlerts } from "../../../network/public/organization_api/alerts/Alerts.api";
// import { MemberResponse, MemberCallback  } from "../../../network/public/accessManager_api/AccessManager.interface";
import { AlertCallback , AlertResponse} from "../../../network/public/organization_api/alerts/Alerts.interface";
import { Dispatch, SetStateAction } from "react";

// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function getAlerts(setApiResponse:Dispatch<SetStateAction<AlertResponse|undefined>>,setApiError:Dispatch<SetStateAction<Error|undefined>>){
    
const handleUserInfoResponse:AlertCallback= (  response: AlertResponse | null, error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setApiError(error)
    }
    console.log(response);
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
      // setLoader(false)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await fetchAlerts( handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  getAlerts;