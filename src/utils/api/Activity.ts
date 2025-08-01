import {fetchActivity} from "../../../network/public/organization_api/activity/Activity.api"
import {ActivityResponse,ActivityCallback } from "../../../network/public/organization_api/activity/Activity.interface";
// import { Dispatch, SetStateAction } from "react";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function fetchAllActivity(setApiResponse:any,setApiError:any, setLoader:any ){
    
const handleUserInfoResponse:ActivityCallback= (  response: ActivityResponse | null, error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setApiError(error)
    }
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
      setLoader(false)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await fetchActivity( handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  fetchAllActivity;