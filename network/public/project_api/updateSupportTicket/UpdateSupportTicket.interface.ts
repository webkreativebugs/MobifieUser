// Request Interface
interface UpdateSupportTicketRequest {
  status: string; // e.g., "open"
  escalation_level: string; // e.g., "level_1"
  priority: string; // e.g., "s2"
}

// Response Interface
interface UpdateSupportTicketResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    ticket: {
      _id: string;
      project_id: string;
      customer_id: string;
      status: string;
      priority: string;
      escalation_level: string;
      subject: string;
      description: string;
    };
  };
}

// Callback Type
type UpdateSupportTicketCallback = (
  response: UpdateSupportTicketResponse | null,
  error: Error | null | undefined
) => void;

// Export for use
export type {
  UpdateSupportTicketRequest,
  UpdateSupportTicketResponse,
  UpdateSupportTicketCallback,
};
