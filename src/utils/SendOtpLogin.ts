import {getOtp} from "../../network/public/otp_login/OtpLogin.api"
import {   OtpRequest,OtpResponse, OtpCallback} from "../../network/public/otp_login/OtpLogin.interface";
import { customAuthorizationConfig } from "../../network/FetchRequest";
function globalOtp(setApiResponse:any,OtpLoginformData:OtpRequest){
    
const handleUserInfoResponse: OtpCallback= (  response: OtpResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
      customAuthorizationConfig.kb_authorization=response.data.token;
      setApiResponse(response)
    }
   
  };

const sendOtp=async ()=>{
   
    try{
        await getOtp(OtpLoginformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  globalOtp;