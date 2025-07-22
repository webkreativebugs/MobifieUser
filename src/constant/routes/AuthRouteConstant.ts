import EmailPasswordSignIn from '../../pages/auth/signIn/email-password/page'
import OtpSignin from '../../pages/auth/signIn/otp/page'
import ForgotPassword from '../../pages/auth/forgetPassword/page'
export const auth =[
    {
        route:"/login-with-password",
        component: EmailPasswordSignIn,
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
