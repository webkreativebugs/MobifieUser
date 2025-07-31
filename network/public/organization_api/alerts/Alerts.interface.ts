// Interface for a single Alert item
export interface Alert {
  _id: string;
  org_id: string;
  title: string;
  message: string;
  type: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
  updated_at: string;
  acknowledged_at: string | null;
  user_id: string | null;
  is_acknowledged: boolean;
  expires_at: string;
  action_required: boolean;
  action_url: string | null;
  __v: number;
}

// Interface for pagination metadata
export interface Pagination {
  current_page: number;
  total_pages: number;
  total_alerts: number;
  alerts_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// Interface for applied filters
export interface AppliedFilters {
  search: string | null;
  type: string | null;
  category: string | null;
  priority: string | null;
  status: string | null;
  sort: string;
}

// Interface for the data section of the response
export interface AlertData {
  alerts: Alert[];
  pagination: Pagination;
  filters: {
    applied: AppliedFilters;
  };
}

// Interface for the status section
export interface Status {
  code: number;
  title: string;
  message: string;
}

// Interface for the complete alert API response
export interface AlertResponse {
  message: string;
  status: Status;
  data: AlertData;
}

// Optional: callback type for async fetch
export type AlertCallback = (
  response: AlertResponse | null,
  error: Error | null | undefined
) => void;

// Optional: config type for URL params
export interface AlertUrlConfig {
  search?: string;
  type?: string;
  category?: string;
  priority?: string;
  status?: string;
  sort?: string;
}
