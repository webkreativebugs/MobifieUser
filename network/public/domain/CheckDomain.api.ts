import { mudranLog } from "../../../utils/MudranLog.utiles";
import { VerifyDomainResponse, FetchVerifyDomainCallback, } from "./CheckDomain.interface";
import { LogTypeEnum } from "../../../enum/Logging.enum";
import { API_ENDPOINTS } from "../../API.constants";
import { fetchRequest } from "../../FetchRequest";



export async function checkdomain(
  callback: FetchVerifyDomainCallback
): Promise<VerifyDomainResponse | Error> {
  const url = API_ENDPOINTS.CHECK_DOMAIN();
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
