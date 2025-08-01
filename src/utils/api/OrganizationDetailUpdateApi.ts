// import {emailpasswordlogin} from "../../../network/public/project_api/email_password_login/EmailPasswordLogin.api"
import {update_org} from "../../../network/public/organization_api/update_organization/UpdateOrganization.api"
import {  UpdateOrganizationNameRequest,
  UpdateOrganizationNameResponse,
  UpdateOrganizationNameCallback } from "../../../network/public/organization_api/update_organization/UpdateOrganization.interface";
// import { useloader } from "../../context/loader_context/LoaderContext";
import { Dispatch, SetStateAction } from "react";


function OrgDetailsUpdate(setApiResponse: Dispatch<SetStateAction<UpdateOrganizationNameResponse|undefined>>,UpdatedOrgData:UpdateOrganizationNameRequest ,setApiError:any,setLoader:any){

  // const {setLoader} =useloader()
const handleUserInfoResponse: UpdateOrganizationNameCallback= (  response: UpdateOrganizationNameResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setLoader(false)
      setApiError(error)
      
    }
    console.log(response);
    if(response)
    {
     setApiResponse(response)
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
        await update_org(UpdatedOrgData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
CallpasswordApi()
}

export default OrgDetailsUpdate;