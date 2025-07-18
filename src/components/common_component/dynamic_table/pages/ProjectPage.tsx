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
  { key: "icon", title: "Logo" , style: { width: 40, height: 40 , background:"white" }  },
  { key: "id", title: "Project ID",style: { background:"white" }  },
  { key: "name", title: "Project Name",style: {  background:"white" }  },
  { key: "status", title: "Status" ,style: {background:"white" } },
  { key: "owner", title: "Owner",style: {  background:"white" }  },
  { key: "created_at", title: "Created On" ,style: { background:"white" } },
];

const ProjectsPage = () => (
  <div style={{ padding: 24 }}>
    <h2 className="table-heading">Projects Overview</h2>
    <DynamicTable data={projects} columns={columns} globalSearch={false} page={"project"} />
  </div>
);

export default ProjectsPage;
