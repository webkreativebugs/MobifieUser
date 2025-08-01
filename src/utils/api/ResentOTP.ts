import {resendOtp} from "../../../network/public/project_api/resent_otp/ResentOtp.api"
import {ResendOtpRequest,
  ResendOtpResponse,
  ResendOtpCallback} from "../../../network/public/project_api/resent_otp/ResentOtp.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
function ResendOtp(data:ResendOtpRequest,setShowToast:any){
    
const handleUserInfoResponse: ResendOtpCallback= (  response: ResendOtpResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
      customAuthorizationConfig.kb_authorization=response.data.token
      setShowToast(true)
    }
   
  };

const sendOtp=async ()=>{
  console.log(data);
  
   
    try{
        await resendOtp( data,handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  ResendOtp;