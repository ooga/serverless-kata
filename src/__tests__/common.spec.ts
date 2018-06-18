import { toProxyResponse, awsAdapterHandler, HTTPError } from "../common";

describe("toProxyResponse", () => {
  it("should format an AWS response with success code", () => {
    //given
    const data = {
      title: "All is ok",
      description: "Your are awesome !!!!!!!!"
    };

    //when
    const result = toProxyResponse(data);

    //then
    expect(result).toEqual({
      statusCode: 200,
      body: '{"title":"All is ok","description":"Your are awesome !!!!!!!!"}'
    });
  });

  it("should format an AWS response with param code", () => {
    //given
    const data = {
      error: "Bad request"
    };

    //when
    const result = toProxyResponse(data, 400);

    //then
    expect(result).toEqual({
      statusCode: 400,
      body: '{"error":"Bad request"}'
    });
  });
});

describe("awsAdapterHandler", () => {
  it("should adapt an handler result to an AWS response", async () => {
    //given
    const handler = () =>
      Promise.resolve({
        title: "All is ok",
        description: "Your are awesome !!!!!!!!"
      });

    //when
    const result = await awsAdapterHandler(handler);

    //then
    expect(result).toEqual({
      statusCode: 200,
      body: '{"title":"All is ok","description":"Your are awesome !!!!!!!!"}'
    });
  });

  it("should adapt an handler exception to an AWS response", async () => {
    //given
    const handler = () => Promise.reject(new Error("Bad request"));

    //when
    const result = await awsAdapterHandler(handler);

    //then
    expect(result).toEqual({
      statusCode: 500,
      body: '{"error":"Bad request"}'
    });
  });

  it("should adapt an handler HTTP exception to an AWS response", async () => {
    //given
    const handler = () => Promise.reject(new HTTPError(400, "Bad request"));

    //when
    const result = await awsAdapterHandler(handler);

    //then
    expect(result).toEqual({
      statusCode: 400,
      body: '{"error":"Bad request"}'
    });
  });
});

describe("HTTPError", () => {
  it("should look nice when printing as string", () => {
    //given
    const error = new HTTPError(404, "Not found !");

    //when
    const string = error.toString();

    //then
    expect(string).toBe("HTTPError: [404] Not found !");
  });
});
