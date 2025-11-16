import {getSupportTicketbyId} from "../../../../network/public/project_api/getSupportTicketbyId/GetSupportTicketById.api"
import {
 SupportTicketByIdResponse,
  SupportTicketByIdCallback
} from "../../../../network/public/project_api/getSupportTicketbyId/GetSupportTicketById.interface"
import { Dispatch,SetStateAction } from "react";

function getSupportbyId(setApiResponse:Dispatch<SetStateAction<SupportTicketByIdResponse|undefined>>,setLoader:any,setApiError:any){
    
const handleUserInfoResponse: SupportTicketByIdCallback= (  response: SupportTicketByIdResponse | null,error: Error | null | undefined) => {
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


const getTicket=async ()=>{
   
    try{
        await getSupportTicketbyId( handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
getTicket()
}
export default  getSupportbyId;