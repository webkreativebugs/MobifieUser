interface DeactivateResponse {
  message: string;
  status: {
    code: number;
    title: string;
    message: string;
  };
  data: Record<string, never>; // Indicates that data is an empty object
}

type DeactivateCallback = (
  response: DeactivateResponse | null,
  error: Error | null | undefined
) => void;

export type {
  DeactivateResponse,
  DeactivateCallback
};
