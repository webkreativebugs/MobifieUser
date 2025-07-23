import {emailpasswordlogin} from "../../../network/public/email_password_login/EmailPasswordLogin.api"
import { LoginResponse,LoginCallback,LoginRequest } from "../../../network/public/email_password_login/EmailPasswordLogin.interface";

interface FormData {
    email:string;
    password:string
}
function passwordApi(setApiResponse:any,EmailPasswordformData:LoginRequest ,setDisable:any,setApiError:any){
  
const handleUserInfoResponse: LoginCallback= (  response: LoginResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setDisable(false)
      setApiError(error)
      
    }
    console.log(response);
    if(response)
    {
     setApiResponse(response.token)
    }
    if(response==null)
    {
      setApiError("Incorrect email or password")
      setDisable(false)
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