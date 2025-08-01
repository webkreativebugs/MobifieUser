import {fetchFaqs} from "../../../network/public/organization_api/faqs/allfaqs/AllFaqs.api"
import {FAQResponse ,FAQCallback  } from "../../../network/public/organization_api/faqs/allfaqs/AllFaqs.interface";
// import { Dispatch, SetStateAction } from "react";
// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function fetchAllFaqs(setApiResponse:any,setApiError:any, setLoader:any ){
    
const handleUserInfoResponse:FAQCallback= (  response: FAQResponse | null, error: Error | null | undefined) => {
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
        await fetchFaqs( handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default  fetchAllFaqs;