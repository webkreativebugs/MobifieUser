// import AppConfigMask from "../../../components/module/project_component/ConfigComponents/app/AppConfigMask"
// import DragAndDrop from "../../../components/module/project_component/ConfigComponents/app/DragAndDrop"
// import { ConfigTypeEnums } from "../../../../enum/DashboardLinks"
import { CustomizeDashboardTypeEnums } from "../../../../enum/DashboardLinks"
// import { ScreenDesignConfiguration } from "../../../../constants/ScreenDesignConfiguration"
import { ScreenDesignConfiguration } from "../../../data/CustomizeData/ClientConfiguration"
import CustomizeMask from "../../../components/module/project_component/ConfigComponents/common/CustomizeMask"
import HeadingMask from "../../../components/common_component/layered_components/HeadingMask"
const page = () => {
  return (
    <CustomizeMask
      name={CustomizeDashboardTypeEnums.SCREEN}
    
    >
      <HeadingMask name="Screen"><></></HeadingMask>
      <>
        <div className=" space-y-4">
          {Object.entries(ScreenDesignConfiguration).map(([screen, config]) => (
            <div key={screen} className="border rounded-lg shadow-sm p-4 bg-white">
              <h2 className="text-lg font-semibold mb-2">{screen}</h2>
              {/* <DragAndDrop/> */}
                {Object.entries(config).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-2 mb-2 bg-gray-100 rounded  flex justify-between items-center"
                  >
                    <span className="font-medium">{key}</span>
                    <span className="text-gray-700">{String(value)}</span>
                  </div>
                ))}
          
            </div>
          ))}
        </div>
      </>
    </CustomizeMask>
  )
}

export default page
