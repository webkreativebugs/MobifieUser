import { API_ENDPOINTS } from "../../../network/API.constants";
import {  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordCallback } from "./ForgetPassword.interface";
import {  fetchRequest } from "../../FetchRequest";



export async function forgetPassword(
  userinfoRequest: ForgotPasswordRequest,
  callback: ForgotPasswordCallback
): Promise<ForgotPasswordResponse | Error> {
  const url = API_ENDPOINTS.FORGET_PASSWORD();
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