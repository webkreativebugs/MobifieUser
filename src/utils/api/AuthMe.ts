import {authMe} from "../../../network/public/project_api/auth_me/AuthMe.api"
import {  VerifyTokenResponse,
  FetchVerifyTokenCallback} from "../../../network/public/project_api/auth_me/AuthMe.interface";
import { customAuthorizationConfig } from "../../../network/FetchRequest";
// import { decoder } from "../JwtDecoder";
// import { useNavigate } from "react-router-dom";
function AuthMe(onRoleChange:any,){
    // const navigate = useNavigate()
const handleUserInfoResponse: FetchVerifyTokenCallback= (  response: VerifyTokenResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      // navigate("/login-with-password",{replace:true})
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