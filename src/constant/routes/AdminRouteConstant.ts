import Projects from '../../pages/modules/project/projects_page/page'
import OtpSignin from '../../pages/auth/signIn/otp/page'
import ForgotPassword from '../../pages/auth/forgetPassword/page'
import Settings from "../../pages/modules/project/setting/page"
export const admin =[
    {
        route:"/",
        component: Projects,
        additional:""
    },
     {
        route:"/settings",
        component: Settings,
        additional:""
    },
    
    

]
