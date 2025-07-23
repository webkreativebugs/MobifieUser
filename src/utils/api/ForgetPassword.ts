import {forgetPassword} from "../../../network/public/forget_password/ForgetPassword.api"
import {ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordCallback} from "../../../network/public/forget_password/ForgetPassword.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
function ForgetPass(data:ForgotPasswordRequest,formaData:any,setApiError:any){
    
const handleUserInfoResponse: ForgotPasswordCallback= (  response: ForgotPasswordResponse | null,error: Error | null | undefined) => {
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
  console.log(data);
  
   
    try{
        await forgetPassword( data,handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  ForgetPass;