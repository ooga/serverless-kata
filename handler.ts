import {
  APIGatewayEvent,
  ProxyCallback,
  Context,
  ProxyHandler
} from "aws-lambda";
import { awsAdapterHandler, Handler } from "./src/common";
import { usersHandler } from "./src/handlers/users";

export const users: ProxyHandler = (
  event: APIGatewayEvent,
  context: Context,
  cb: ProxyCallback
) => {
  awsAdapterHandler(usersHandler).then(response => cb(null, response));
};
