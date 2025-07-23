import { API_ENDPOINTS } from "../../../network/API.constants";
import { LogoutResponse,
  LogoutCallback } from "./Logout.interface";
import {  fetchRequest } from "../../FetchRequest";



export async function logOut(
  
  callback: LogoutCallback
): Promise<LogoutResponse | Error> {
  const url = API_ENDPOINTS.LOGOUT();
  try {
    // Add Validation for each field as required , email validation, mobile number validation
    // Assuming fetchRequest is a function that wraps fetch and returns a parsed JSON response
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