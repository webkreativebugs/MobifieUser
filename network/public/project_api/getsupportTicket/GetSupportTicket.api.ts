import { before } from "node:test";
import { API_ENDPOINTS } from "../../../../network/API.constants";

import {  fetchRequest } from "../../../FetchRequest";
import {
   ListAllSupportTicketsResponse,
  ListAllSupportTicketsCallback
} from "./GetSupportTicket.interface"
export const supportTicketurlconfig = {
  sort: "",
  limit:4,
  page:"",
  search:""
};



export async function getSupportTicket(
 
  callback: ListAllSupportTicketsCallback
): Promise<ListAllSupportTicketsResponse | Error> {
  const url = API_ENDPOINTS. GETSUPPORTTICKET(supportTicketurlconfig.sort,supportTicketurlconfig.limit,supportTicketurlconfig.page,supportTicketurlconfig.search);
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