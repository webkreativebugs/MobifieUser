import Projects from '../../pages/modules/project/projects_page/page'
import AlertPage from "../../pages/modules/project/alert_page/page"
import LandingPage from '../../pages/modules/project/redirecting_page/LandingPage'
import Settings from "../../pages/modules/org/setting/page"
import Help from "../../pages/modules/org/help/page"
import AccessManager from "../../pages/modules/org/access-manager/page"
import Activity from "../../pages/modules/org/activity/page"
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
        route:"/alerts",
        component: AlertPage,
        additional:""
    },
     {
        route:"/access-manager",
        component: AccessManager,
        additional:""
    },
     {
        route:"/settings",
        component: Settings,
        additional:""
    },
     {
        route:"/help",
        component: Help,
        additional:""
    },
    {
        route:"/activity",
        component: Activity,
        additional:""
    },
    

]
