// Interface for a single Activity item
export interface Activity {
  _id: string;
  module: string;
  submodule: string;
  activity_details: string;
  action: string;
  email: string;
  created_at: string;
}

// Interface for pagination metadata
export interface ActivityPagination {
  current_page: number;
  total_pages: number;
  total_activities: number;
  activities_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// Interface for the data section of the response
export interface ActivityData {
  activities: Activity[];
  pagination: ActivityPagination;
}

// Interface for the status section
export interface ActivityStatus {
  code: number;
  title: string;
  message: string;
}

// Interface for the complete activity API response
export interface ActivityResponse {
  message: string;
  status: ActivityStatus;
  data: ActivityData;
}

// Optional: callback type for async fetch
export type ActivityCallback = (
  response: ActivityResponse | null,
  error: Error | null | undefined
) => void;

// Optional: config type for URL params
export interface ActivityUrlConfig {
  search?: string;
  module?: string;
  submodule?: string;
  action?: string;
  email?: string;
  sort?: string;
}
