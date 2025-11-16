interface ListAllSupportTicketsResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    tickets: {
      _id: string;
      project_id: string;
      customer_id: string;
      status: string;
      priority: string;
      escalation_level: string;
      subject: string;
      description: string;
    }[];
    pageInfo: {
      nextCursor: string;
      hasNextPage: boolean;
    };
  };
}

type ListAllSupportTicketsCallback = (
  response: ListAllSupportTicketsResponse | null,
  error: Error | null | undefined
) => void;

export type {
  ListAllSupportTicketsResponse,
  ListAllSupportTicketsCallback
};
