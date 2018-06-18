const filteredUser: User = {
  id: 2,
  firstName: "wxcvbn",
  lastName: "nbvcx"
};
const mockUsers: User[] = [
  {
    id: 0,
    firstName: "azerty",
    lastName: "poiuy"
  },
  {
    id: 1,
    firstName: "qsdfgh",
    lastName: "mlkjh"
  },
  filteredUser
];

jest.mock("../../datas/users", () => ({
  default: mockUsers
}));

import { usersHandler } from "../users";
import { HTTPError } from "../../common";
import { User } from "../../repositories/users";

describe("usersHandler", () => {
  it("should return the complete list of users", async () => {
    //given
    const users = mockUsers;

    //when
    const result = await usersHandler();

    //then
    expect(result).toEqual(users);
  });
});

function anApiGatewayEvent(props = {}) {
  return {
    body: null,
    headers: {},
    httpMethod: "GET",
    isBase64Encoded: false,
    path: "",
    pathParameters: null,
    queryStringParameters: null,
    stageVariables: null,
    requestContext: aRequestContext(),
    resource: "",
    ...props
  };
}

function aRequestContext(props = {}) {
  return {
    accountId: "",
    apiId: "",
    httpMethod: "",
    identity: {
      accessKey: null,
      accountId: null,
      apiKey: null,
      caller: null,
      cognitoAuthenticationProvider: null,
      cognitoAuthenticationType: null,
      cognitoIdentityId: null,
      cognitoIdentityPoolId: null,
      sourceIp: "",
      user: null,
      userAgent: null,
      userArn: null
    },
    stage: "",
    requestId: "",
    resourceId: "",
    resourcePath: "",
    ...props
  };
}
