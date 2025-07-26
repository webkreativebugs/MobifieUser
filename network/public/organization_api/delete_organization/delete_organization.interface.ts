interface ApiResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: Record<string, never>; // empty object
}

type ApiCallback = (
  response: ApiResponse | null,
  error: Error | null | undefined
) => void;

export type {
  ApiResponse,
  ApiCallback
};
