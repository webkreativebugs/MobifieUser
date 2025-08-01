interface Member {
  _id: string;
  email: string;
  mobile: string;
  role: string;
  status: string;
  created_at: string;
  last_login: string;
  is_verified: boolean;
  multi_factor_enabled: boolean;
}

interface Pagination {
  current_page: number;
  total_pages: number;
  total_members: number;
  members_per_page: number;
  has_next: boolean;
  has_prev: boolean;
}

interface MemberData {
  members: Member[];
  pagination: Pagination;
}

interface MemberResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: MemberData;
}

type MemberCallback = (
  response: MemberResponse | null,
  error: Error | null | undefined
) => void;
export type {
  Member,
  Pagination,
  MemberData,
  MemberResponse,
  MemberCallback
};
