import {authMe} from "../../../network/public/auth_me/AuthMe.api"
import {  VerifyTokenResponse,
  FetchVerifyTokenCallback} from "../../../network/public/auth_me/AuthMe.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
import { decoder } from "../JwtDecoder";
function AuthMe(onRoleChange:any,){
    
const handleUserInfoResponse: FetchVerifyTokenCallback= (  response: VerifyTokenResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      onRoleChange("")
    }
    console.log(response);
    if(response)
    {
      customAuthorizationConfig.kb_authorization=response.data.token;
      onRoleChange(response.data.token)
      
    }
   
  };

const sendOtp=async ()=>{
   
    try{
        await authMe(handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  AuthMe;