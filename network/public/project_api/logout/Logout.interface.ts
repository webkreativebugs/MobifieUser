interface LogoutResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: {}; // Empty object
}

type LogoutCallback = (
  response: LogoutResponse | null,
  error: Error | null | undefined
) => void;

export type {
  LogoutResponse,
  LogoutCallback
};
