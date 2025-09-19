interface Status {
  code: number;
  title: string;
  message: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  password_hash: string;
  created_at: string;
  updated_at: string;
  organization:string
}

interface VerifyTokenData {
  token: string;
  user: User;
}

interface VerifyTokenResponse {
  message: string;
  status: Status;
  data: VerifyTokenData;
}

type FetchVerifyTokenCallback = (
  response: VerifyTokenResponse | null,
  error: Error | null | undefined
) => void;

export type {
  Status,
  User,
  VerifyTokenData,
  VerifyTokenResponse,
  FetchVerifyTokenCallback
};
