import {verifyOtp} from "../../../network/public/otp_verification/OtpVerification.api"
import {  OtpVerifyRequest,OtpVerifyResponse,OtpVerifyCallback } from "../../../network/public/otp_verification/OtpVerification.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
import { decoder } from "../JwtDecoder";

function ValidateOtp(OtpLoginformData:OtpVerifyRequest,setApiResponse:any ,setSubmitting:any , setDisabled:any,setApiError:any){

    
const handleUserInfoResponse: OtpVerifyCallback= (  response: OtpVerifyResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setSubmitting(false)
      setDisabled(false)
    }
    console.log(response);
    if(response)
    {
     setApiResponse(response.data.token)
    //  sessionStorage.setItem("token",response.data.token)
    }
    if(response==null)
    {
      setSubmitting(false)
      setDisabled(false)
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