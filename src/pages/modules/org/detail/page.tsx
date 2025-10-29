import jsPDF from "jspdf";
import Navbar from "../../../../components/common_component/Navbar";
import { useLocation } from "react-router-dom";
import { log } from "node:console";
import DisplayBillingDetails from "../../../../components/module/org_component/billingComponent/DisplayBillingDetails";
import BuildDetailComponent from "../../../../components/module/org_component/billingComponent/BuildDetailComponent";

const page = () => {
  const location = useLocation();
  const { id, name } = location.state;
  console.log(id);

  // Dummy Data

  return (
    <>
      <Navbar />
      <div className=" mx-28 mt-28">
        {name === "build" && <BuildDetailComponent />}
        {name === "bill" && <DisplayBillingDetails />}
      </div>
    </>
  );
};

export default page;
