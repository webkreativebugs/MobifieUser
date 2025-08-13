import {useauth} from "../../../../context/auth_context/AuthContext"
import {decoder} from "../../../../utils/JwtDecoder"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function LandingPage () {
    const navigate = useNavigate()
    const {role} = useauth();
  
  useEffect(() => {
    const currentRole = decoder(role);
    if (currentRole === "admin") {
      navigate("/project", { replace: true });
    } else {
      navigate("/login-with-password", { replace: true });
    }
  }, [navigate, role]);


  return (
    <div>
     <div>
      hello
     </div>
    </div>
  )
}

