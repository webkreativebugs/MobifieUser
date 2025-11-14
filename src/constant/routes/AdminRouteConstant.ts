import Projects from '../../pages/modules/project/projects_page/page'
import AlertPage from "../../pages/modules/project/alert_page/page"
import LandingPage from '../../pages/modules/project/redirecting_page/LandingPage'
import Settings from "../../pages/modules/org/setting/page"
import Help from "../../pages/modules/org/help/page"
import AccessManager from "../../pages/modules/org/access-manager/page"
import Activity from "../../pages/modules/org/activity/page"
import Billings from "../../pages/modules/org/billing_page/page"
import Builds from "../../pages/modules/org/builds/page"
import Support from "../../pages/modules/org/support/page"
import UiConfig from '../../pages/customize_pages/ui-config/page'
import ApiConfig from "../../pages/customize_pages/api-config/page"
import NewAppConfig from "../../pages/customize_pages/new-app-config/page"
import NewScreenConfig from "../../pages/customize_pages/Edit-screen-config/page"
import UiDashboard from "../../pages/customize_pages/ui-dashboard/page"
// import WebUrlConfig from "../../pages/customize_pages/web-url-config/page"
// import DefaultConfig from "../../pages/customize_pages/default-config/page"
import ScreenConfig from "../../pages/customize_pages/screen-config/page"
import Configuration from "../../pages/customize_pages/configuration_page/page"
// import ClientConfig from "../../pages/customize_pages/client-config/page"
// import YouConfig from "../../pages/customize_pages/you-config/page"
import Details from '../../pages/modules/org/detail/page'
import NewBuild from "../../pages/modules/org/new_build_form/page"
import Review from "../../pages/modules/org/reviewChanges/page"

interface RouteProps {
  route: { params: Record<string, any> };
}


export const admin:{ route: string; component: React.ComponentType<RouteProps> ;additional:string}[] =[
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
        route:"/billings",
        component: Billings,
        additional:""
    },
     {
        route:"/builds",
        component: Builds,
        additional:""
    },
    {
        route:"/support",
        component: Support,
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
        route:"/project/dashboard",
        component: UiDashboard,
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
    //  {
    //     route:"/project/weburl-config",
    //     component:WebUrlConfig,
    //     additional:""
    // },
    //  {
    //     route:"/project/default-config",
    //     component:DefaultConfig,
    //     additional:""
    // },
     {
        route:"/project/screen-config",
        component: ScreenConfig,
        additional:""
    },
    //  {
    //     route:"/project/you-config",
    //     component: YouConfig,
    //     additional:""
    // },
    //  {
    //     route:"/project/client-config",
    //     component: ClientConfig,
    //     additional:""
    // },
    {
    
         route:"/build/details",
        component: Details,
        additional:""
    
}    ,
    {
    
         route:"/build/create-new-build",
        component: NewBuild,
        additional:""
    
}    ,
    {
    
         route:"/billing/details",
        component: Details,
        additional:""
    
},
    {
    
         route:"/project/new-app-config",
        component: NewAppConfig,
        additional:""
    
},
    {
    
         route:"/project/edit-screen-config",
        component: NewScreenConfig,
        additional:""
    
},
    {
    
         route:"/project/draft-screen-config",
        component: NewScreenConfig,
        additional:""
    
},
    {
    
         route:"/project/configuration",
        component: Configuration,
        additional:""
    
},
    {
    
         route:"/project/configuration/review",
        component: Review,
        additional:""
    
}
    



]
