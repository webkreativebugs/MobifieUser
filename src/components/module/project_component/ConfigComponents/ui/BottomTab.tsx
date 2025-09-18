import { useState, useRef, useEffect } from "react";
import { useUi } from "../../../../../../src/context/ui_context/UiContext";

// 🔹 Types
interface Tab {
  label: string;
  icon: string;
}

interface BottomTabProps {
  tabs: Tab[];
}

interface BottomTabData {
  component: string;
  type: string;
  props: BottomTabProps;
}

function BottomTab({ element }: { element: string }) {
  const { uiConfig, setUiConfig } = useUi();
  const contextData = uiConfig[element]["BottomTab"] as BottomTabData;

  // 🔹 Local editable state
  const [tabData, setTabData] = useState<BottomTabData>(contextData);

  // 🔹 Backup of original context data (never changes)
  const originalData = useRef<BottomTabData>(contextData);

  // 🔹 Helper: get icon from backup
  const getIconFromBackup = (label: string) => {
    return (
      originalData.current.props.tabs.find((t) => t.label === label)?.icon || ""
    );
  };

  // 🔹 Sync when element changes
  useEffect(() => {
    setTabData(contextData);
  }, [element]);

  // 🔹 Toggle tab locally
  const handleToggle = (index: number, label: string, checked: boolean) => {
    setTabData((prev) => {
      const updatedTabs = [...prev.props.tabs];
      updatedTabs[index] = {
        ...updatedTabs[index],
        icon: checked ? getIconFromBackup(label) : "",
      };
      return {
        ...prev,
        props: {
          ...prev.props,
          tabs: updatedTabs,
        },
      };
    });
  };

  // 🔹 Save to context automatically whenever tabData changes
  useEffect(() => {
    setUiConfig((prev: any) => {
      const updated = {
        ...prev,
        [element]: {
          ...prev[element],
          BottomTab: {
            ...tabData,
            props: { ...tabData.props, tabs: [...tabData.props.tabs] },
          },
        },
      };
      console.log("✅ Auto-saved to uiConfig:", updated[element].BottomTab);
      return updated;
    });
  }, [tabData, element, setUiConfig]);

  return (
    <div className="w-full p-20 space-y-6 h-32">
      <div className="bg-primary rounded-lg w-full p-4">
        <h1 className="text-xl font-semibold w-full border-b-2 mb-4 pb-1">
          Bottom Tabs
        </h1>

        {tabData.props.tabs.map((tab, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={!!tab.icon}
              onChange={(e) => handleToggle(idx, tab.label, e.target.checked)}
              className="h-4 w-4"
            />
            <span>{tab.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default BottomTab;
