import {verifyOtp} from "../../../network/public/project_api/otp_verification/OtpVerification.api"
import {  OtpVerifyRequest,OtpVerifyResponse,OtpVerifyCallback } from "../../../network/public/project_api/otp_verification/OtpVerification.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
import { decoder } from "../JwtDecoder";

function ValidateOtp(OtpLoginformData:OtpVerifyRequest,setApiResponse:any , setLoader:any,setApiError:any){

    
const handleUserInfoResponse: OtpVerifyCallback= (  response: OtpVerifyResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
     
      setLoader(false)
    }
    console.log(response);
    if(response)
    {
     setApiResponse(response.data.token)
     setLoader(false)
    //  sessionStorage.setItem("token",response.data.token)
    }
    if(response==null)
    {
      setLoader(false)
      setApiError("Invalid OTP")
    }
   
  };

const sendOtp=async ()=>{
   
    try{
        await verifyOtp(OtpLoginformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  ValidateOtp;