import { API_ENDPOINTS } from "../../../../API.constants";
// import {  FAQResponse } from "./AllFaqs.interface";
import {  fetchRequest } from "../../../../FetchRequest";

import {FAQCallback, FAQResponse ,urlConfig } from "./AllFaqs.interface"
export const modifiedUrlConfig: urlConfig = {
  search: "",
};
export async function fetchFaqs(
  //  quary:string|null,
  callback: FAQCallback
): Promise<FAQResponse | Error> {
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