import {getOtp} from "../../../network/public/project_api/otp_login/OtpLogin.api"
import {   OtpRequest,OtpResponse, OtpCallback} from "../../../network/public/project_api/otp_login/OtpLogin.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
function globalOtp(setApiResponse:any,OtpLoginformData:OtpRequest,setLoader:any,setApiError:any){
    
const handleUserInfoResponse: OtpCallback= (  response: OtpResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);

      setLoader(false)
      setApiError("User not found")
      // setApiResponse(error)
    }
    console.log(response);
    if(response)
    {
      customAuthorizationConfig.kb_authorization=response.data.token;
      setApiResponse(response)
      setLoader(false)
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