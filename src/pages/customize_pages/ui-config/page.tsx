import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import UiCOmponent from "../../../data/CustomizeData/UiDropdown.json";
import { useEffect, useState } from "react";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";
import Ui from "../../../components/module/project_component/ConfigComponents/ui/Ui";

interface Section {
  type: string;
  url: string;
}

export interface LayoutData {
  header: Section;
  footer: Section;
  main: string[];
}
interface ScreenData {
  name: string;
  // type: string;
  header: string;
  footer: string;
  url: string;
}

const page = () => {
  const [element, setElement] = useState(UiCOmponent[0].name);

  const [layout, setLayout] = useState<ScreenData>({
    name: "",
    // type: "",
    header: "",
    footer: "",
    url: "",
  });

  useEffect(() => {
    const currentScreen = UiCOmponent.find((item) => item.name === element);

    const footer = UiCOmponent.find((item) => item.name === "Bottom Tab");
    const header = UiCOmponent.find((item) => item.name === "Header");
    const home = UiCOmponent.find((item) => item.name === "Home");

    if (localStorage.getItem(element)) {
      try {
        setLayout({ ...JSON.parse(localStorage.getItem(element) as string) });
      } catch (e) {
        console.error("Failed to parse layout from localStorage", e);
      }
    }

    if (currentScreen) {
      let newUrl = currentScreen.designs[0];

      if (element === "Header" || element === "Bottom Tab") {
        newUrl = home?.designs[0] || "";
      }

      setLayout((prev) => ({
        ...prev,
        name: currentScreen.name,
        header: header?.designs[0] || "",
        footer: footer?.designs[0] || "",
        url: newUrl,
      }));
    }
  }, [element]);

  console.log(layout);
  const handleUI = (item: any, screenName: string) => {
    console.log(item + "  " + "karta hai ");
    if (screenName === "Header") {
      setLayout((prev) => ({
        ...prev,
        header: item,
      }));
    } else if (screenName === "Bottom Tab") {
      setLayout((prev) => ({
        ...prev,
        footer: item,
      }));
    } else {
      setLayout((prev) => ({
        ...prev,
        url: item,
      }));
    }
  };

  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className=" flex  h-[85vh]">
        <UiConfigSidebar element={element} setElement={setElement} />
        {/* <CustomizeSidebar active="xfbhfh" /> */}
        <Ui element={element} setElement={setElement} handleUI={handleUI} />

        {/* Remove 'main' prop if PreviewComponent does not accept it */}
        <PreviewComponent element={element} />
      </div>
    </CustomizeMask>
  );
};

export default page;
