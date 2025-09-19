interface LoginRequest {
  email: string;
  password: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  password_hash: string;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  organization:string
}

interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

type LoginCallback = (
  response: LoginResponse | null,
  error: Error | null | undefined
) => void;

export type {
  LoginRequest,
  LoginResponse,
  LoginCallback
};
