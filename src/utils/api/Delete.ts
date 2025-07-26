import {deleteOrg} from "../../../network/public/organization_api/delete_organization/delete_organization.api"
import {  ApiResponse,
  ApiCallback} from "../../../network/public/organization_api/delete_organization/delete_organization.interface";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function DeleteOrg(setApiResponse:any,setApiError:any, setLoader: (loading: boolean) => void){
    
const handleUserInfoResponse: ApiCallback= (  response: ApiResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
    }
    console.log(response);
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await deleteOrg( handleUserInfoResponse);
        sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  DeleteOrg;