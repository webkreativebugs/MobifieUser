// Interface for a single tag item
export interface ProjectTag {
  key: string;
  value: string;
}

// Interface for the project data
export interface ProjectData {
  _id: string;
  name: string;
  description: string;
  createdAt: string;   // ISO date string
  updatedAt: string;   // ISO date string
  createBy: string;
  status: string;
  website: string;
  plan_name: string;
  tags: ProjectTag[];
}

// Interface for the status section
export interface ProjectStatus {
  code: number;
  title: string;
  message: string;
}

// Interface for the complete project API response
export interface ProjectResponse {
  message: string;
  status: ProjectStatus;
  data: ProjectData;
}

// Optional: callback type for async fetch
export type ProjectCallback = (
  response: ProjectResponse | null,
  error: Error | null | undefined
) => void;

// Optional: config type for URL params (filters/sorting)
export interface ProjectUrlConfig {
  search?: string;
  status?: string;
  plan_name?: string;
  createdBy?: string;
  sort?: string;
}
