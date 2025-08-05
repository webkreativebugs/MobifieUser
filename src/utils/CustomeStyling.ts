import { Alert } from "../../network/public/organization_api/alerts/Alerts.interface" 
export const customStyle= (page:string|undefined,data?:Alert , table=false,read=false) =>{
    console.log(read);
    
    const criticalStyle = {
        borderLeft:"5px solid rgba(211, 47, 47, 0.25)",
        color:"rgb(211, 47, 47)",
        
    }
    const securityStyle={
        backgroundColor:"rgba(81, 45, 168, 0.25)",
        color:"rgb(81, 45, 168)"
    }
    const infoStyle={
        backgroundColor:"rgba(33, 150, 243, 0.25)",
        color:"rgb(33, 150, 243)"
    }
    const warningStyle={
        backgroundColor:"rgba(255, 160, 0, 0.25)",
        color:"rgb(255, 160, 0)"
    }
    const successStyle={
        backgroundColor:"rgba(56, 142, 60, 0.25)",
        color:"rgb(56, 142, 60)"
    }
    const errorStyle={
        backgroundColor:"rgba(244, 67, 54, 0.25)",
        color:"rgb(244, 67, 54)"
    }
    const tableStyle={
        borderCollapse: "separate" as const,
        borderSpacing:" 0 10px"
    }
    const readStyle={
        backgroundColor:"white",
        color:"black"
    }
    if(page==="alert")
    {
        if(data?.type==="CRITICAL" && !read)
        {
            return criticalStyle
        }
         if(data?.type==="SECURITY" && !read)
        {
            return securityStyle
        }
         if(data?.type==="INFO" && !read)
        {
            return infoStyle
        }
         if(data?.type==="WARNING" && !read)
        {
            return warningStyle
        }
         if(data?.type==="SUCCESS" && !read)
        {
            return successStyle
        }
         if(data?.type==="ERROR" && !read)
        {
            return errorStyle
        }
        if(table)
        {
            return tableStyle
        }
        if(read)
        {
            return readStyle
        }
    }
   
}