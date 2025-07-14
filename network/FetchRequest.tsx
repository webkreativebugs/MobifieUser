
import { LogTypeEnum } from "../enum/Logging.enum";
import { clientIP, getUserIP } from "../utils/getIP";
import { mudranLog } from "../utils/MudranLog.utiles";


interface CustomAuthorizationConfig {
  kb_authorization: string;
  authorization: string;
}

export const customAuthorizationConfig: CustomAuthorizationConfig = {
  authorization: "46e53e83af7a4e77468a6d181720e3befab51c8a2b304bcb6dc5488b5ca3f233",
  kb_authorization: "",
}; 

export async function fetchRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body: any = null,
  headers: Record<string, string> = {},
  callback?: (data: any | null, error: Error | null) => void
): Promise<any> {
  try {

    if(clientIP.ip === ""){
      const ip = await getUserIP(); // Get user’s real IP
      if (!ip) throw new Error("⚠️ Unable to determine IP address");
    }
    

    let options: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key":"1234567890abcdef",
        "x-api-secret":"abcdef1234567890",
        // "x-forwarded-for":clientIP.ip,
        "x-forwarded-for":"0.0.0.0",
        "authorization":`Bearer ${customAuthorizationConfig.authorization}`,
        "x-kb-authorization":`${customAuthorizationConfig.kb_authorization}`,
        "domain":`mobifie`,
        // "credentials": "include", // ✅ Send cookies & auth headers
        ...headers,
      },
      credentials: "include", // ✅ FIX: Ensure cookies/tokens are sent
    };

    if (method === "GET") {
      options.cache = "no-store";
    }

    if (body && ["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (response.status === 401) {
      console.warn("⚠️ Unauthorized request. Redirecting to login...");
      // setTimeout(() => {
      //   window.location.href = `/pricing`; // Redirect user to login
      // }, 1000);
      return null;
    }

    if (!response.ok) {
      console.error("❌ API Error:", response);
      const errorResponse = await response.json();
      throw new Error(`Error ${response.status}: ${JSON.stringify(errorResponse)}`);
    }

    return await response.json();
  } catch (error: any) {
    mudranLog(LogTypeEnum.ERROR ,"❌ Fetch Error:", error);
    throw new Error(error?.message || "Unknown error occurred during fetch.");
  }
}


// curl --location 'http://localhost:7438/api/public/plan/user/verifyotp' \
// --header 'x-api-key: 1234567890abcdef' \
// --header 'x-api-secret: abcdef1234567890' \
// --header 'x-forwarded-for: 0.0.0.0' \
// --header 'authorization: Bearer 46e53e83af7a4e77468a6d181720e3befab51c8a2b304bcb6dc5488b5ca3f233' \
// --header 'Content-Type: application/json' \
// --data '{
//     "otp": "945522",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4NzY1NDMyMTAiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MzkxMjM1MjAsImV4cCI6MTczOTEyNzEyMH0.RsE4SS9u5BKEsDXNYvKgQ6Ekm05Cw3LFDouA4wcrKX8"
// }'
