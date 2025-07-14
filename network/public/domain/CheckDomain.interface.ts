interface Status {
  code: number;
  title: string;
  message: string;
}

interface VerifyDomainResponse {
  message: string;
  status: Status;
  data: Record<string, unknown>; // empty object now, but keeps it flexible
}

type FetchVerifyDomainCallback = (
  response: VerifyDomainResponse | null,
  error: Error | null | undefined
) => void;

export type {
  Status,
  VerifyDomainResponse,
  FetchVerifyDomainCallback,
};
