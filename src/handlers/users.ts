import { Handler, HTTPError } from "../common";
import { APIGatewayEvent } from "aws-lambda";
import { getAllUsers } from "../repositories/users";
import userDatas from "../datas/users";

export const usersHandler: Handler = async () => {
  return getAllUsers(userDatas);
};
