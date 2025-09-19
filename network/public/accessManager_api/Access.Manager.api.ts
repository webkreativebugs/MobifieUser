import { API_ENDPOINTS } from "../../API.constants";
// import {  FAQResponse } from "./AllFaqs.interface";
import {  fetchRequest } from "../../FetchRequest";
import { OrganizationDetailsConfig } from "../organization_api/organization_detail/OrganizationalDetails.api";
import {  MemberResponse,MemberCallback } from "./Access.Manager.interface"
export const CustomConfigPageLimits = {
  page: "",
  limit:"",
  search:""
};

export async function accessManager(
  //  quary:string|null,
  callback: MemberCallback
): Promise<MemberResponse | Error> {
  const url = API_ENDPOINTS.ACCESS_Manager(CustomConfigPageLimits.page,CustomConfigPageLimits.limit ,CustomConfigPageLimits.search,OrganizationDetailsConfig.orgName);
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