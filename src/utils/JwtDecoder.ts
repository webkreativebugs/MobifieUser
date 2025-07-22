import {jwtDecode} from "jwt-decode";
// import { useauth } from "../context/auth_context/AuthContext";
 
interface Decoded  {
    
"exp": number,
"iat":number ,
"name":string ,
"role":string,
"_id":string
}

export const decoder =(token:any)=>{
// const {setRole} = useauth()
try {
  const decoded:Decoded = jwtDecode(token);
  console.log('Decoded Payload:', decoded);
  // setRole(decoded.role)
  return decoded.role
} catch (error) {
  console.error('Invalid token:', error);
}
return ""
}