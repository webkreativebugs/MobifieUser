import { tablinks } from "../../../../../data/TabLinks";
import { Link } from "react-router-dom";
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
const TabLinks = () => {
    // const {orgDetails}=useorg();
  return (
    <div className=" w-7/12 flex justify-between items-center  p-5 pt-2 pb-2 mb-0 mt-2 ">
      {/* <p className="text-xl font-semibold " >{orgDetails?.data.name}</p> */}
      <div className="mb-0 flex bg-primary shadow-md rounded-md p-2 pr-5 pl-5 justify-between w-full border-gray-200">
      {tablinks.map((item, key) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            to={item.link}
            key={key}
            className={` py-2 text-md font-medium w-[10rem]  ${
              isActive
                ? "active-tab-link-api rounded-md"
                : "text-gray-600 hover:text-gray-900 not-active"
            }`}
          >
            <p className={`flex items-center   ${isActive?"text-white":""}`}>
               <item.Icon className="mr-2"/> {item.name}
            </p>
         
          </Link>
        );
      })}
    </div>
     </div>
  )
}

export default TabLinks
 