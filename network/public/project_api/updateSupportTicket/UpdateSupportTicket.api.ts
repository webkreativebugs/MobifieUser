import { API_ENDPOINTS } from "../../../../network/API.constants";

import {  fetchRequest } from "../../../FetchRequest";
import {
  UpdateSupportTicketRequest,
  UpdateSupportTicketResponse,
  UpdateSupportTicketCallback,
} from "./UpdateSupportTicket.interface"



export async function updateSupportTicket(
  userinfoRequest: UpdateSupportTicketRequest,
  callback: UpdateSupportTicketCallback
): Promise<UpdateSupportTicketResponse | Error> {
  const url = API_ENDPOINTS. UPDATESUPPORTTICKET();
  try {
  
    const responseData = await fetchRequest(url, "PATCH", userinfoRequest);
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