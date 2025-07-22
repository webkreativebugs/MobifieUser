import {resendOtp} from "../../../network/public/resent_otp/ResentOtp.api"
import {ResendOtpRequest,
  ResendOtpResponse,
  ResendOtpCallback} from "../../../network/public/resent_otp/ResentOtp.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
function ResendOtp(){
    
const handleUserInfoResponse: ResendOtpCallback= (  response: ResendOtpResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
      customAuthorizationConfig.kb_authorization=response.data.token;
      // setApiResponse(response)
    }
   
  };

const sendOtp=async ()=>{
   
    try{
        await resendOtp( {token:"rtfgyhnjkm"},handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  ResendOtp;