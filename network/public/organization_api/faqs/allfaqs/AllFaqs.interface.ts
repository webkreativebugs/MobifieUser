// Interface for a single FAQ item
export interface FAQ {
  _id: string;
  category: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
}

// Interface for pagination metadata
export interface Pagination {
  current_page: number;
  total_pages: number;
  total_faqs: number;
  faqs_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

// Interface for the complete response data section
export interface FAQData {
  faqs: FAQ[];
  pagination: Pagination;
}

// Interface for the status section
export interface Status {
  code: number;
  title: string;
  message: string;
}
export interface FAQResponse {
  message: string;
  status: Status;
  data: FAQData;
}

export type FAQCallback = (
  response: FAQResponse | null,
  error: Error | null | undefined
) => void;

// Interface for the full API response
