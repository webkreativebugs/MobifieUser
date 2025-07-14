
export default class CustomError extends Error {
    code: number; // Add the 'code' property
    message: string;
    constructor(error: Error) {
      super(error?.message);
      this.code = getCodeFromError(error) || 500;
      this.message = error?.message;
    }
  }
  

  const getCodeFromError = (error: Error): number | undefined => {
    // List of common HTTP status codes
    const httpStatusCodes = [400, 401, 403, 404, 500, 502, 503, 504];
  
    // Check if the error message contains any of the common HTTP status codes
    for (const code of httpStatusCodes) {
      if (error?.message?.includes(code.toString())) {
        return code; // Return the found status code
      }
    }
  
    // If no known status code is found in the error message, return undefined
    return undefined;
  };
  