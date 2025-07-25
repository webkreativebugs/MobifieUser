interface UpdateOrganizationNameRequest {
  name: string;
  tag: {
    key: string;
    value: string;
  };
}

interface UpdateOrganizationNameResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    _id: string;
    name: string;
  };
}

type UpdateOrganizationNameCallback = (
  response: UpdateOrganizationNameResponse | null,
  error: Error | null | undefined
) => void;

export type {
  UpdateOrganizationNameRequest,
  UpdateOrganizationNameResponse,
  UpdateOrganizationNameCallback
};
