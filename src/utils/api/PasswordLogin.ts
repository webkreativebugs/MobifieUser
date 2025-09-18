import {emailpasswordlogin} from "../../../network/public/project_api/email_password_login/EmailPasswordLogin.api"
import { LoginResponse,LoginCallback,LoginRequest } from "../../../network/public/project_api/email_password_login/EmailPasswordLogin.interface";
// import { useloader } from "../../context/loader_context/LoaderContext";
import { OrganizationDetailsConfig } from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.api";

function passwordApi(setApiResponse:any,EmailPasswordformData:LoginRequest ,setApiError:any,setLoader:any){

  // const {setLoader} =useloader()
const handleUserInfoResponse: LoginCallback= (  response: LoginResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setLoader(false)
      setApiError(error)
      
    }
    console.log(response);
    if(response)
    {
     setApiResponse(response)
     OrganizationDetailsConfig.orgName=response.user.organization
     setLoader(false)

    }
    if(response==null)
    {
      setApiError("Incorrect email or password")
      setLoader(false)
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