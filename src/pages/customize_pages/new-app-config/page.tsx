import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import { ConfigTypeEnums } from "../../../../enum/DashboardLinks";
import { useEffect, useState } from "react";

const page = () => {
  const [isDisable, setIsDisable] = useState(false);
  useEffect(() => {
    setIsDisable(false);
  });
  return (
    <AppConfigMask
      isDisable={isDisable}
      name={CustomizeDashboardTypeEnums.APP}
      displayName={ConfigTypeEnums.CLIENT}
      display="flex"
      direction="column"
    />
  );
};

export default page;
