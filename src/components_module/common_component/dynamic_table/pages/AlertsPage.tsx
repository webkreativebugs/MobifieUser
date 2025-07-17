import { ColumnConfig } from "../types";
import DynamicTable from "..";

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
  { key: "icon", title: "Logo" },
  { key: "id", title: "ID" },
  { key: "type", title: "Type" },
  { key: "message", title: "Message" },
  { key: "project_id", title: "Project ID" },
  { key: "timestamp", title: "Timestamp" },

];

const AlertsPage = () => (
  <div style={{ padding: 24 }}>
    <h2>Alerts Overview</h2>
    <DynamicTable data={alerts} columns={columns} globalSearch={false}  emptyMessage="No Alert" page={"alert"} />
  </div>
);

export default AlertsPage;
