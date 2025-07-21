import { ColumnConfig } from "../types";
import DynamicTable from "..";
import { useState ,useEffect } from "react";
const alerts = [
  {
    id: "alert001",
    type: "Error",
    message: "Sync job failed due to network timeout.",
    project_id: "proj001",
    timestamp: "2025-07-14T12:45:00Z",
    icon: "https://picsum.photos/seed/proj002/40",
  },
  {
    id: "alert002",
    type: "Warning",
    message: "High memory usage detected.",
    project_id: "proj002",
    timestamp: "2025-07-14T10:30:00Z",
    icon: "https://picsum.photos/seed/proj002/40",
  },
];

const columns: ColumnConfig[] = [
  { key: "icon", title: "Logo", style: { width: 40, height: 40} },
  { key: "id", title: "ID" , },
  { key: "type", title: "Type",},
  { key: "message", title: "Message", },
  // { key: "project_id", title: "Project ID" },
  { key: "timestamp", title: "Timestamp",  },

];



const AlertsPage = () => {
  const [selected , setSelected] = useState("");
  // const [localData, setLocalData] =use
 useEffect(() => {
    const selectedTab: string | null = localStorage.getItem("active");

    if (selectedTab) {
      setSelected(selectedTab as string);
    }
  }, []);
  function handleChange(data:string)
  {
    setSelected(data)
    localStorage.setItem("active",data)
  }
  return(
  <div  style={{ padding: 24 }}>
    <h2 className="table-heading">Alerts Overview</h2>
    {/* ********************************************************* */}
    <div className="mb-5" >
     <span className={`${selected==="open"?"active-tab-link":"tab-links"}`}    onClick={()=>handleChange("open")} >Open Alerts</span>
     <span className={`${selected==="close"?"active-tab-link":"tab-links"}`}   onClick={()=>handleChange("close")}>Closed Alerts</span>
     <span className={`${selected==="setting"?"active-tab-link":"tab-links"}`} onClick={()=>handleChange("setting")}>Alerts Settings</span>
    </div>
    {/* ********************************************************* */}
    <DynamicTable data={alerts} columns={columns} globalSearch={false}  emptyMessage="No Alert" page={"alert"} />
  </div>
  )
}

export default AlertsPage;
