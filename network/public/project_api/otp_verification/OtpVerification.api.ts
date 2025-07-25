import { API_ENDPOINTS } from "../../../../network/API.constants";
import {  OtpVerifyRequest,
  OtpVerifyResponse,
  OtpVerifyCallback } from "./OtpVerification.interface";
import {  fetchRequest } from "../../../FetchRequest";



export async function verifyOtp(
  userinfoRequest: OtpVerifyRequest,
  callback: OtpVerifyCallback
): Promise<OtpVerifyResponse | Error> {
  const url = API_ENDPOINTS. Verify_OTP();
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