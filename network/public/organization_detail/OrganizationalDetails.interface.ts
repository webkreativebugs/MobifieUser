interface OrganizationResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: OrganizationData;
}

interface OrganizationData {
  _id: string;
  name: string;
  is_active: boolean;
  craete_by: string; // Kept as-is to match your response
  additional_data: {
    theme: string;
    language: string;
    login_type: string;
    timezone: string;
  };
  created_at: string;
  updated_at: string;
  project: {
    _id: string;
    name: string;
  };
  tags: Array<{
    key: string;
    value: string;
  }>;
}

// 🔁 Callback type for the API
type OrganizationCallback = (
  response: OrganizationResponse | null,
  error: Error | null | undefined
) => void;

export type {
  OrganizationResponse,
  OrganizationCallback
};
