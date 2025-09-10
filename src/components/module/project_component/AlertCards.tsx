import { Alert} from "../../../../network/public/organization_api/alerts/Alerts.interface"
import { 
  FaTimesCircle,   // Error
  FaExclamationTriangle, // Warning
  FaCheckCircle,   // Success
  FaInfoCircle,    // Info
  FaRadiation ,     // Critical
  FaShieldAlt
} from "react-icons/fa";
// import { useState } from "react";
interface PROPS {
    data:Alert[];

}
const AlertCards = ({data}:PROPS) => {
     function timeAgo(value:any) {
  const now = new Date();
  const date = new Date(value);

  const diffMs = now.getTime() - date.getTime(); // difference in milliseconds
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  if (diffDays > 1) {
    return `${diffDays} days ago`;
  } else if (diffDays === 1) {
    return `1 day ago`;
  } else if (diffHrs > 1) {
    return `${diffHrs} hours ago`;
  } else if (diffHrs === 1) {
    return `1 hour ago`;
  } else if (diffMin > 1) {
    return `${diffMin} minutes ago`;
  } else if (diffMin === 1) {
    return `1 minute ago`;
  } else {
    return `just now`;
  }
}

// const [popupData,setPopupData]=useState({})

const statusIcons = {
  ERROR: <FaTimesCircle className="text-red-500" />,
  WARNING: <FaExclamationTriangle className="text-yellow-500" />,
  SUCCESS: <FaCheckCircle className="text-green-500" />,
  INFO: <FaInfoCircle className="text-blue-500" />,
  CRITICAL: <FaRadiation className="text-red-700" />,
  SECURITY: <FaShieldAlt className="text-blue-700" />
};
const statusColors = {
  ERROR: "rgba(239, 68, 68, 0.15)",     // text-red-500
  WARNING: "rgba(234, 179, 8, 0.15)",   // text-yellow-500
  SUCCESS: "rgba(21, 128, 61, 0.15)",   // text-green-700
  INFO: "rgba(59, 130, 246, 0.15)",     // text-blue-500
  CRITICAL: "rgba(185, 28, 28, 0.15)",  // text-red-700
  SECURITY: "rgba(29, 78, 216, 0.15)"   // text-blue-700
};



  return (
    <div>
      {
 data.map((alert, index) => (
  <div 
    key={index} 
    className="mt-4 flex justify-between gap-2 mb-5  w-full rounded-[20px] card-bg card px-6 py-6"
  >
    {/* Organization ID */}
    <div className="  justify-between items-center max-w-[90%] flex gap-2">
        <div className="mr-7 ml-7 size-11 rounded-full flex justify-center items-center" style={{backgroundColor:statusColors[alert.type as keyof typeof statusIcons]}} >
            <p className="text-xl" >{statusIcons[alert.type as keyof typeof statusIcons]}</p>
        </div>
        <div className="flex flex-col  gap-2">
      <div className="flex justify-between">
        <p className="text-xl font-medium">{alert.title}</p>
      </div>
      <div>                   
             <p className="m-0" >
                {(alert.message.trim().split(" ").length > 30) ? (`${alert.message.trim().split(" ").slice(0, 30).join(" ")}...`) : alert.message}
                     {alert.message.trim().split(" ").length > 30 && (
                        
                              <span
                              className="text-black font-semibold cursor-pointer underline "    >
                                Read More
                              </span>
                           
                          )}
                        </p>   
        {/* <p>{alert.message} </p> */}
      </div>
      </div>
    
    </div>
      <div className="flex justify-center items-center">
        {timeAgo(alert.created_at)}
      </div>

  </div>
))
      }
    </div>
  )
}



export default AlertCards


