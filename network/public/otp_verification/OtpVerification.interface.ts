interface OtpVerifyRequest {
  otp: string;
}

interface OtpVerifyResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {
    token: string;
    user: {
      _id: string;
      name: string;
      email: string;
      mobile: string;
      password_hash: string;
      created_at: string; // ISO date
      updated_at: string; // ISO date
    };
  };
}

type OtpVerifyCallback = (
  response: OtpVerifyResponse | null,
  error: Error | null | undefined
) => void;

export type {
  OtpVerifyRequest,
  OtpVerifyResponse,
  OtpVerifyCallback
};
