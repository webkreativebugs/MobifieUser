import { tablinks } from "../../../../../data/TabLinks";
import { Link } from "react-router-dom";
import { useorg } from "../../../../../context/org_context/OrganizationContext";
const TabLinks = () => {
    const {orgDetails}=useorg();
  return (
    <div className="bg-primary  p-5 pb-0 mb-0 ">
      <p className="text-xl font-semibold mb-2 " >{orgDetails?.data.name}</p>
      <p className="text-sm text-gray-500 mb-5">{"Saved at: 12 Aug 25, 04:31 pm"}</p>
      <hr/>
      <div className="mt-5 mb-0 flex border-b justify-between w-96 border-gray-200">
      {tablinks.map((item, key) => {
        const isActive = location.pathname === item.link;
        return (
          <Link
            to={item.link}
            key={key}
            className={`mr-5 py-2 text-md font-medium transition-colors ${
              isActive
                ? "border-b-2 border-gray-900 text-black-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
     </div>
  )
}

export default TabLinks
