import Projects from '../../pages/modules/project/projects_page/page'
import AlertPage from "../../pages/modules/project/alert_page/page"
import LandingPage from '../../pages/modules/project/redirecting_page/LandingPage'
import Settings from "../../pages/modules/org/setting/page"
import Help from "../../pages/modules/org/help/page"
import AccessManager from "../../pages/modules/org/access-manager/page"
import Activity from "../../pages/modules/org/activity/page"
import UiConfig from '../../pages/customize_pages/ui-config/page'
import ApiConfig from "../../pages/customize_pages/api-config/page"
import WebUrlConfig from "../../pages/customize_pages/web-url-config/page"
import DefaultConfig from "../../pages/customize_pages/default-config/page"
import ScreenConfig from "../../pages/customize_pages/screen-config/page"
import ClientConfig from "../../pages/customize_pages/client-config/page"
import YouConfig from "../../pages/customize_pages/you-config/page"
export const admin =[
    {
        route:"/",
        component: LandingPage,
        additional:""
    },
     {
        route:"/project",
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
     {
        route:"/project/ui-config",
        component: UiConfig,
        additional:""
    },
    {
        route:"/project/api-config",
        component:ApiConfig,
        additional:""
    },
     {
        route:"/project/weburl-config",
        component:WebUrlConfig,
        additional:""
    },
     {
        route:"/project/default-config",
        component:DefaultConfig,
        additional:""
    },
     {
        route:"/project/screen-config",
        component: ScreenConfig,
        additional:""
    },
     {
        route:"/project/you-config",
        component: YouConfig,
        additional:""
    },
     {
        route:"/project/client-config",
        component: ClientConfig,
        additional:""
    },



]
