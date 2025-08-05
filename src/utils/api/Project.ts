import {fetchProjects} from "../../../network/public/organization_api/project/Project.api"
import {ProjectResponse ,ProjectCallback  } from "../../../network/public/organization_api/project/Project.interface";
// import { Dispatch, SetStateAction } from "react";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function projects(setApiResponse:any,setApiError:any, setLoader:any ){
    
const handleUserInfoResponse:ProjectCallback= (  response: ProjectResponse | null, error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setApiError(response);
    }
    
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
      setLoader(false)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await fetchProjects( handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  projects;