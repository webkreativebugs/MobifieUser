import Navbar from "../../../../components/common_component/Navbar";
import { useLocation } from "react-router-dom";

import DisplayBillingDetails from "../../../../components/module/org_component/billingComponent/DisplayBillingDetails";
import BuildDetailComponent from "../../../../components/module/org_component/billingComponent/BuildDetailComponent";
import SupportTicketDetail from "../../../../components/module/project_component/ConfigComponents/ui/supportComponent/SupportTicketDetail";

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
        {name === "supportticket" && <SupportTicketDetail id={id} />}
      </div>
    </div>
  );
};

export default page;
