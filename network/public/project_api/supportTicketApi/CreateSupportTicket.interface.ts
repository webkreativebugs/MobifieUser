interface CreateSupportTicketRequest {
  project_id: string;
  customer_id: string;
  type: string; // e.g., "customer_ticket"
  category: string; // e.g., "signin"
  priority: string; // e.g., "s3"
  status: string; // e.g., "open"
  subject: string;
  description: string;
}

interface CreateSupportTicketResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    ticket: {
      _id: string;
      status: string;
      priority: string;
      escalation_level: string;
      subject: string;
      description: string;
      customer: {
        _id: string;
        email: string;
      };
      project: string | null;
    };
  };
}

type CreateSupportTicketCallback = (
  response: CreateSupportTicketResponse | null,
  error: Error | null | undefined
) => void;

export type {
  CreateSupportTicketRequest,
  CreateSupportTicketResponse,
  CreateSupportTicketCallback
};
