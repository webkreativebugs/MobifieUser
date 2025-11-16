import { API_ENDPOINTS } from "../../../../network/API.constants";

import {  fetchRequest } from "../../../FetchRequest";
import {
  CreateSupportTicketRequest,
  CreateSupportTicketResponse,
  CreateSupportTicketCallback
} from "./CreateSupportTicket.interface"



export async function createSupportTicket(
  userinfoRequest: CreateSupportTicketRequest,
  callback: CreateSupportTicketCallback
): Promise<CreateSupportTicketResponse | Error> {
  const url = API_ENDPOINTS. CREATESUPPORTTICKET();
  try {
  
    const responseData = await fetchRequest(url, "POST", userinfoRequest);
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