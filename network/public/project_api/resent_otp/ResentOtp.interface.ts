interface ResendOtpRequest {
  email?:string;
  mobile?:string
}

interface ResendOtpResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    token: string;
  };
}

type ResendOtpCallback = (
  response: ResendOtpResponse | null,
  error: Error | null | undefined
) => void;

export type {
  ResendOtpRequest,
  ResendOtpResponse,
  ResendOtpCallback
};
