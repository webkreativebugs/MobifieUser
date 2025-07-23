interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {}; // empty object
}

type ForgotPasswordCallback = (
  response: ForgotPasswordResponse | null,
  error: Error | null | undefined
) => void;

export type {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  ForgotPasswordCallback
};
