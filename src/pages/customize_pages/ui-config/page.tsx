import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask";
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks";
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask";
import UiCOmponent from "../../../data/CustomizeData/UiDropdown.json";
import { useEffect, useState } from "react";
import CustomizeSidebar from "../../../components/module/project_component/ConfigComponents/common/CustomizeSidebar";
import UiConfigSidebar from "../../../components/module/project_component/ConfigComponents/ui/UiConfigSidebar";
import PreviewComponent from "../../../components/module/project_component/ConfigComponents/ui/PreviewComponent";

interface Section {
  type: string;
  url: string;
}

export interface LayoutData {
  header: Section;
  footer: Section;
  main: Section[];
}

const page = () => {
  // const [first, setfirst] = useState(UiCOmponent[0].designs[0].image);
  const [element, setElement] = useState(UiCOmponent[0].key);
  const [first, setfirst] = useState(
    UiCOmponent.find((item) => item.key === element)?.designs[0].image
  );
  const [header, setHeader] = useState(UiCOmponent[0].key);
  const [footer, setFooter] = useState(UiCOmponent[0].key);
  const [layout, setLayout] = useState<LayoutData>({
    header: { type: "header", url: "" },
    footer: { type: "footer", url: "" },
    main: [],
  });

  const handleUI = (item: any) => {
    if (item.type === "header") {
      setLayout((prev) => ({
        ...prev,
        header: {
          ...prev.header,
          url: item.image,
        },
      }));
    }

    if (item.type === "footer") {
      setLayout((prev) => ({
        ...prev,
        footer: {
          ...prev.footer,
          url: item.image,
        },
      }));
    }

    if (item.type === "main") {
      setLayout((prev) => ({
        ...prev,
        main: [...prev.main, { type: "main", url: item.image }],
      }));
    }
  };

  return (
    <CustomizeMask name={CustomizeDashboardTypeEnums.UI}>
      <div className=" flex  h-[85vh]">
        <UiConfigSidebar element={element} setElement={setElement} />
        {/* <CustomizeSidebar active="xfbhfh" /> */}
        <div className=" w-2/3 ">
          <h1 className="text-3xl font-semibold ml-12 mb-6">{element}</h1>
          {/* <h1 className="text-2xl font-semibold mb-8">Select Screen</h1> */}

          {/* Example: Display the 'name' property of the first UI component */}
          <div className="flex flex-wrap justify-around ml-4 px-8 w-full  gap-x-1 gap-y-4 ">
            {" "}
            {UiCOmponent[0]?.designs &&
              (
                UiCOmponent.find((item) => item.key === element)?.designs || []
              ).map((item, idx) => (
                // <div
                //   className=""
                //   key={idx}
                //   dangerouslySetInnerHTML={{ __html: item.html }}
                // />
                <div key={idx} className="w-[24rem] border p-5 rounded-lg">
                  <button
                    //  onClick={() => setfirst(item.image)}
                    onClick={() => handleUI(item)}
                  >
                    <img src={item.image} alt="" />
                  </button>

                  {/* <p>{item.title}</p> */}
                </div>
              ))}
          </div>
        </div>
        {/* Remove 'main' prop if PreviewComponent does not accept it */}
        <PreviewComponent {...layout} />
      </div>
    </CustomizeMask>
  );
};

export default page;
