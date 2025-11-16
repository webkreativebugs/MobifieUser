import Navbar from "../../../../components/common_component/Navbar";
import { useLocation } from "react-router-dom";

import DisplayBillingDetails from "../../../../components/module/org_component/billingComponent/DisplayBillingDetails";
import BuildDetailComponent from "../../../../components/module/org_component/billingComponent/BuildDetailComponent";

const page = () => {
  const location = useLocation();
  const { id, name } = location.state;
  console.log(id);

  // Dummy Data

  return (
    <div className="h-screen overflow-y-auto bg-gray-50">
      <Navbar />
      <div className="mx-6 md:mx-28 mt-10 pb-10">
        {name === "build" && <BuildDetailComponent />}
        {name === "bill" && <DisplayBillingDetails />}
      </div>
    </div>
  );
};

export default page;
