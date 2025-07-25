// OTP Request Interface
interface OtpRequest {
  mobile?:string;
  email?:string;
  country_code?:string
}

// OTP Response Status Info
interface StatusInfo {
  code: number;
  title: string;
  message: string;
}

// OTP Response Interface
interface OtpResponse {
  message: string;
  status: StatusInfo;
  data: {
    token: string;
  };
}

// Optional Callback Type (if you're using callbacks)
type OtpCallback = (
  response: OtpResponse | null,
  error: Error | null | undefined
) => void;

export type {
  OtpRequest,
  StatusInfo,
  OtpResponse,
  OtpCallback
};
