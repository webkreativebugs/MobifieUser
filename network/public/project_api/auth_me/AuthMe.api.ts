import { mudranLog } from "../../../../utils/MudranLog.utiles";
import { VerifyTokenResponse,
  FetchVerifyTokenCallback } from "./AuthMe.interface";
import { LogTypeEnum } from "../../../../enum/Logging.enum";
import { API_ENDPOINTS } from "../../../API.constants";
import { fetchRequest } from "../../../FetchRequest";



export async function authMe(
  callback: FetchVerifyTokenCallback
): Promise<VerifyTokenResponse | Error> {
  const url = API_ENDPOINTS.AUTH_ME();
  try {
    const responseData = await fetchRequest(url, "GET");
    if (responseData instanceof Error) {
      callback(null, responseData);
    } else {
      callback(responseData, null);
    }
    return responseData;
  } catch (error) {
    mudranLog(LogTypeEnum.ERROR, "Error fetching domain ", error);
    callback(null, error instanceof Error ? error : new Error(String(error)));
    throw error instanceof Error ? error : new Error(String(error));
  }
}
