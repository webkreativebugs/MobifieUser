import {accessManager} from "../../../network/public/accessManager_api/AccessManager.api"
import { MemberResponse, MemberCallback  } from "../../../network/public/accessManager_api/AccessManager.interface";
import { Dispatch, SetStateAction } from "react";

// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function getAccessManagerData(setApiResponse:Dispatch<SetStateAction<MemberResponse|undefined>>,setApiError:Dispatch<SetStateAction<Error|undefined>>, setLoader: (loading: boolean) => void){
    
const handleUserInfoResponse:MemberCallback= (  response: MemberResponse | null, error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setApiError(error)
    }
    console.log(response);
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
        await accessManager( handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  getAccessManagerData;