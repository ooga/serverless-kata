import { ProxyResult, APIGatewayEvent, Context } from "aws-lambda";

export const toProxyResponse = (
  data: any,
  statusCode?: number
): ProxyResult => {
  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(data)
  };
};

export const awsAdapterHandler = (handler: Handler): Promise<ProxyResult> => {
  return handler()
    .then(toProxyResponse)
    .catch(error =>
      toProxyResponse(
        {
          error: error.message
        },
        error.code || 500
      )
    );
};

export class HTTPError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }

  toString() {
    return `HTTPError: [${this.code}] ${this.message}`;
  }
}

export type Handler = () => Promise<any>;
