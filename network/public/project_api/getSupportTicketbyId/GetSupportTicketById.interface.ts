interface SupportTicketByIdResponse {
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
      customer: {
        _id: string;
        email: string;
      };
      project: null | {
        // If project details get included later,
        // add fields here
        [key: string]: any;
      };
    };
  };
}

type SupportTicketByIdCallback = (
  response: SupportTicketByIdResponse | null,
  error: Error | null | undefined
) => void;

export type {
  SupportTicketByIdResponse,
  SupportTicketByIdCallback
};
