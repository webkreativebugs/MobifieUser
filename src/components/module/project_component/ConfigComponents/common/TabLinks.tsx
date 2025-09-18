import { tablinks } from "../../../../../data/TabLinks";
import { Link } from "react-router-dom";
// import { useorg } from "../../../../../context/org_context/OrganizationContext";
const TabLinks = () => {
    // const {orgDetails}=useorg();
  return (
    <div className="bg-primary p-5 pb-0 mb-0 rounded-lg ">
      <p className="text-2xl font-semibold mb-2 " >{orgDetails?.data.name}</p>
      <p className="text-sm text-gray-500 mb-5">{"Saved at: 12 Aug 25, 04:31 pm"}</p>
      <hr/>
      <div className="mt-5 mb-0 flex border-b border-gray-200">
      {tablinks.map((item, key) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            to={item.link}
            key={key}
            className={`mr-5 w-[5rem]  text-lg font-medium transition-colors `}
          >
          <p className={`py-5 flex justify-center w-7/12 ${
              isActive
                ? "border-b-2 border-gray-900 text-black-900"
                : "text-gray-600 hover:text-gray-900"
            }`}>{item.name}</p>  
          </Link>
        );
      })}
    </div>
     </div>
  )
}

export default TabLinks