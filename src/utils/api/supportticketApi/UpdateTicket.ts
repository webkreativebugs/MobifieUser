import {updateSupportTicket} from "../../../../network/public/project_api/updateSupportTicket/UpdateSupportTicket.api"
import {
  UpdateSupportTicketRequest,
  UpdateSupportTicketResponse,
  UpdateSupportTicketCallback,
} from "../../../../network/public/project_api/updateSupportTicket/UpdateSupportTicket.interface"
import { Dispatch,SetStateAction } from "react";
// import { customAuthorizationConfig } from "../../../../network/FetchRequest";
function updateSupport(setApiResponse:Dispatch<SetStateAction<UpdateSupportTicketResponse|undefined>>,updateTicketformData:UpdateSupportTicketRequest,setLoader:any,setApiError:any){
    
const handleUserInfoResponse: UpdateSupportTicketCallback= (  response: UpdateSupportTicketResponse | null,error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);

      setLoader(false)
      setApiError("User not found")
      // setApiResponse(error)
    }

    if(response)
    {
          console.log(response);
      // customAuthorizationConfig.kb_authorization=response.data.token;
        setLoader(false)
      setApiResponse(response)
    
    }
   
  };

const update=async ()=>{
   
    try{
        await updateSupportTicket(updateTicketformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
update()
}
export default  updateSupport;