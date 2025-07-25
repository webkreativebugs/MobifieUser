import {forgetPassword} from "../../../network/public/project_api/forget_password/ForgetPassword.api"
import {ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordCallback} from "../../../network/public/project_api/forget_password/ForgetPassword.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function ForgetPass(data:ForgotPasswordRequest,setApiResponse:any,setApiError:any, setLoader: (loading: boolean) => void){
    
const handleUserInfoResponse: ForgotPasswordCallback= (  response: ForgotPasswordResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    setLoader(false)

    if(response===null){
       setApiError("invalid credentials")
    }
    else
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
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