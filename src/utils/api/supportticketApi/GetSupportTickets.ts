import {getSupportTicket ,supportTicketurlconfig} from "../../../../network/public/project_api/getsupportTicket/GetSupportTicket.api"
import {
  ListAllSupportTicketsResponse,
  ListAllSupportTicketsCallback
} from "../../../../network/public/project_api/getsupportTicket/GetSupportTicket.interface"
import { Dispatch,SetStateAction } from "react";
const pagenation={
    forword:"",
    // backword:""
}
function getSupport(setApiResponse:Dispatch<SetStateAction<ListAllSupportTicketsResponse|undefined>>,setLoader:any,setApiError:any){
    
const handleUserInfoResponse: ListAllSupportTicketsCallback= (  response: ListAllSupportTicketsResponse | null,error: Error | null | undefined) => {
    setLoader(true)
    supportTicketurlconfig.page=pagenation.forword;

    if (error) {
      console.error("Error while fetching user info:", error);

      setLoader(false)
      setApiError("User not found")
      // setApiResponse(error)
    }

    if(response)
    {
          console.log(response);
          pagenation.forword=response.data.pageInfo.nextCursor
      // customAuthorizationConfig.kb_authorization=response.data.token;
        setLoader(false)
      setApiResponse(response)
    
    }
  
  };


const getTicket=async ()=>{
   
    try{
        await getSupportTicket( handleUserInfoResponse);
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
getTicket()
}
export default  getSupport;