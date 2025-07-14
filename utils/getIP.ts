
import { API_ENDPOINTS } from "../network/API.constants";
// import axios from "axios";
import axios from "axios"

export const getUserIP = async (): Promise<string | null> => {
  try {
    const response = await axios.get(API_ENDPOINTS.GET_IP());
    clientIP.ip = response.data.ip;
    return response.data.ip;
  } catch (error) {
    console.error("❌ Error fetching IP:", error);
    return null;
  }
};


interface ClientIPInterface {
    ip: string;
  }
  
  export const clientIP: ClientIPInterface = {
    ip: "",
  };