import { API_ENDPOINTS } from "../../../API.constants";
// import {  FAQResponse } from "./AllFaqs.interface";
import {  fetchRequest } from "../../../FetchRequest";

import {AlertResponse,AlertCallback,AlertUrlConfig } from "./Alerts.interface"
export const modifiedUrlConfig: AlertUrlConfig = {
  search: "",
};
export async function fetchAlerts(
  //  quary:string|null,
  callback: AlertCallback
): Promise<AlertResponse | Error> {
  const url = API_ENDPOINTS.ALL_FAQS(modifiedUrlConfig.search);
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