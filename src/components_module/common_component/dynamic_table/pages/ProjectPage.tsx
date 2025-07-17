import { ColumnConfig } from "../types";

import DynamicTable from "..";

const projects = [
  {
    id: "proj001",
    icon: "https://picsum.photos/seed/proj001/40",
    name: "Mobifie App",
    status: "Active",
    owner: "Prabhat Sharma",
    created_at: "2025-07-01T10:30:00Z",
  },
  {
    id: "proj002",
    icon: "https://picsum.photos/seed/proj002/40",
    name: "Quitiz Platform",
    status: "Development",
    owner: "Rohan Jain",
    created_at: "2025-06-15T08:15:00Z",
  },
];

const columns: ColumnConfig[] = [
  { key: "icon", title: "Logo" },
  { key: "id", title: "Project ID" },
  { key: "name", title: "Project Name" },
  { key: "status", title: "Status" },
  { key: "owner", title: "Owner" },
  { key: "created_at", title: "Created On" },
];

const ProjectsPage = () => (
  <div style={{ padding: 24 }}>
    <h2>Projects Overview</h2>
    <DynamicTable data={projects} columns={columns} globalSearch={false} page={"project"} />
  </div>
);

export default ProjectsPage;
