import {createSupportTicket} from "../../../../network/public/project_api/supportTicketApi/CreateSupportTicket.api"
import {
  CreateSupportTicketRequest,
  CreateSupportTicketResponse,
  CreateSupportTicketCallback
} from "../../../../network/public/project_api/supportTicketApi/CreateSupportTicket.interface"
import { Dispatch,SetStateAction } from "react";
// import { customAuthorizationConfig } from "../../../../network/FetchRequest";
function createSupport(setApiResponse:Dispatch<SetStateAction<CreateSupportTicketResponse|undefined>>,createTicketformData:CreateSupportTicketRequest,setLoader:any,setApiError:any){
    
const handleUserInfoResponse: CreateSupportTicketCallback= (  response: CreateSupportTicketResponse | null,error: Error | null | undefined) => {
     setLoader(true)
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

const createNew=async ()=>{
   
    try{
        await createSupportTicket(createTicketformData, handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
createNew()
}
export default  createSupport;