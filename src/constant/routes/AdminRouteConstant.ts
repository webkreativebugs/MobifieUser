import Projects from '../../pages/modules/project/projects_page/page'
import AlertPage from "../../pages/modules/project/alert_page/page"
import LandingPage from '../../pages/modules/project/redirecting_page/LandingPage'
import Settings from '../../pages/modules/project/setting/page'
export const admin =[
    {
        route:"/",
        component: LandingPage,
        additional:""
    },
     {
        route:"/projects",
        component: Projects,
        additional:""
    },
    {
        route:"/settings",
        component: Settings,
    },
     {
        route:"/alert",
        component: AlertPage,
        additional:""
    },
    
    

]
