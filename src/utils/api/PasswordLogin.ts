import {emailpasswordlogin} from "../../../network/public/email_password_login/EmailPasswordLogin.api"
import { LoginResponse,LoginCallback,LoginRequest } from "../../../network/public/email_password_login/EmailPasswordLogin.interface";
import { decoder } from "../JwtDecoder";

interface FormData {
    email:string;
    password:string
}
function passwordApi(setApiResponse:any,EmailPasswordformData:LoginRequest){
  
const handleUserInfoResponse: LoginCallback= (  response: LoginResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
     setApiResponse(decoder(response.token))
     sessionStorage.setItem("token",response.token)
    }
    
  };

const CallpasswordApi=async ()=>{
   
    try{
        await emailpasswordlogin(EmailPasswordformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
CallpasswordApi()
}

export default passwordApi;