import {jwtDecode} from "jwt-decode";
// import { useauth } from "../context/auth_context/AuthContext";
 
interface Decoded  {
    
"exp": number,
"iat":number ,
"name":string ,
"role":string,
"_id":string
}

export const decoder =(token:string)=>{
// const {setRole} = useauth()
try {
  if(token){
  const decoded:Decoded = jwtDecode(token);
  // console.log('Decoded Payload:', decoded);
  // setRole(decoded.role)
  return decoded.role
  }
} catch (error) {
  console.error('Invalid token:', error);
}
return ""
}