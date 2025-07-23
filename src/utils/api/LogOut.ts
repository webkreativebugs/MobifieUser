import {logOut} from "../../../network/public/logout/Logout.api"
import {  LogoutResponse,
  LogoutCallback} from "../../../network/public/logout/Logout.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function ForgetPass(){
    
const handleUserInfoResponse: LogoutCallback= (  response: LogoutResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      // setApiResponse(response)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await logOut( handleUserInfoResponse);
        sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  ForgetPass;