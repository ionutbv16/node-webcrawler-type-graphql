
import "reflect-metadata";
import { graphqlCall } from "../../gqutils/graphqlCall";
import {contextValue, expectedRespoonse } from "./fetchurls.test.stub";

const query = `
query {
    fetchUrls (cursor : "") { 
        urls {
        urla
        title
        id
        }
        cursor
    }
}
`;

describe("Test fetchUrls Query Resolver", () => {
  it("should return the proper value", async () => {
    const response = await graphqlCall({
      source: query,
      variableValues: {},
      contextValue
    });
    expect(response).toMatchObject(expectedRespoonse); 
  });
});