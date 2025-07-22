import {emailpasswordlogin} from "../../network/public/email_password_login/EmailPasswordLogin.api"
import { LoginResponse,LoginCallback } from "../../network/public/email_password_login/EmailPasswordLogin.interface";

interface FormData {
    email:string;
    password:string
}
const handleUserInfoResponse: LoginCallback= (  response: LoginResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    
  };

const passwordApi=async (EmailPasswordformData:FormData)=>{
   
    try{
        await emailpasswordlogin(EmailPasswordformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}

export default passwordApi;