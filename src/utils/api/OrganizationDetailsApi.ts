import {org_details} from "../../../network/public/organization_detail/OrganizationalDetails.api"
import {  LogoutResponse,LogoutCallback} from "../../../network/public/logout/Logout.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function OrgDetails(){
    
const handleUserInfoResponse: LogoutCallback= (  response: LogoutResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
   
    if(response)
    {
     console.log(response);
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await org_details( handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  OrgDetails;