import {org_details} from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.api"
import { OrganizationResponse,OrganizationCallback} from "../../../network/public/organization_api/organization_detail/OrganizationalDetails.interface"
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
import { Dispatch, SetStateAction } from "react";
function OrgDetails(setOrgDetails: Dispatch<SetStateAction<OrganizationResponse|undefined>>){
    
const handleUserInfoResponse: OrganizationCallback= (  response: OrganizationResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      // setLoader(false)
    }
   
    if(response)
    {
     setOrgDetails(response)
    //  setLoader(false)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
    
    try{
        await org_details( handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  OrgDetails;