// import { before } from "node:test";
import { API_ENDPOINTS } from "../../../../network/API.constants";

import {  fetchRequest } from "../../../FetchRequest";
import {
    SupportTicketByIdResponse,
  SupportTicketByIdCallback
} from "./GetSupportTicketById.interface"
export const supportTicketId = {
  _id: "",

};



export async function getSupportTicketbyId(
 
  callback: SupportTicketByIdCallback
): Promise<SupportTicketByIdResponse | Error> {
  const url = API_ENDPOINTS. GETSUPPORTTICKETBYID(supportTicketId._id);
  try {
  
    const responseData = await fetchRequest(url, "GET");
    console.log('API response:', responseData);
    if (responseData instanceof Error) {

      callback(null, responseData);
    } else {
      callback(responseData, null);
    }
    return responseData;
  } catch (error) {
    console.log(
      "Error Message:",
      error instanceof Error ? error.message : String(error)
    );
    callback(null, error instanceof Error ? error : new Error(String(error)));
    throw error instanceof Error ? error : new Error(String(error));
  }
}