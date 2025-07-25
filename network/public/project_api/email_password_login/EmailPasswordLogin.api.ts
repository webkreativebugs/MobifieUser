
import { API_ENDPOINTS } from "../../../../network/API.constants";
import {  LoginRequest,LoginResponse,LoginCallback } from "./EmailPasswordLogin.interface";
import {  fetchRequest } from "../../../FetchRequest";



export async function emailpasswordlogin(
  userinfoRequest: LoginRequest,
  callback: LoginCallback
): Promise<LoginResponse | Error> {
  const url = API_ENDPOINTS.EMAIL_PASSWORD_LOGIN();
  try {
    // Add Validation for each field as required , email validation, mobile number validation
    // Assuming fetchRequest is a function that wraps fetch and returns a parsed JSON response
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
