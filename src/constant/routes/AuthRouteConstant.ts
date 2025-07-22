import EmailPasswordSignIn from '../../pages/auth/signIn/email-password/page'
import OtpSignin from '../../pages/auth/signIn/otp/page'
import ForgotPassword from '../../pages/auth/forgetPassword/page'
// import { Navigate, useNavigate } from 'react-router-dom'
export const auth =[
    {
        route:"/",
        component:EmailPasswordSignIn ,
        additional:""
    },
    {
        route:"/login-with-password",
        component: EmailPasswordSignIn,
        additional:""
    },
    {
        route:"/login-with-otp",
        component: OtpSignin,
        additional:""
    },
    {
         route:"/forget-password",
        component: ForgotPassword,
        additional:""
    },
      {
        route:"/",
        component: EmailPasswordSignIn,
        additional:""
    },
    

]
