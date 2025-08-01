import {deactivateOrg} from "../../../network/public/organization_api/deactivate_organization/deactivate_organization.api"
import {DeactivateResponse,
  DeactivateCallback} from "../../../network/public/organization_api/deactivate_organization/deactivate_organization.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function Deactivate(setApiResponse:any,setApiError:any, setLoader: (loading: boolean) => void){
    
const handleUserInfoResponse: DeactivateCallback= (  response: DeactivateResponse | null,error: Error | null | undefined) => {
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
        await deactivateOrg( handleUserInfoResponse);
        sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  Deactivate;