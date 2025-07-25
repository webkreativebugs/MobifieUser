import { API_ENDPOINTS } from "../../../API.constants";
import {  OrganizationResponse,OrganizationCallback } from "./OrganizationalDetails.interface";
import {  fetchRequest } from "../../../FetchRequest";



export async function org_details(
  
  callback: OrganizationCallback
): Promise<OrganizationResponse | Error> {
  const url = API_ENDPOINTS.ORG_DETAILS();
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