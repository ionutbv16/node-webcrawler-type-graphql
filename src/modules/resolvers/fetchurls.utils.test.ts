import "reflect-metadata";
import { getPaginatedUrls, getIndex } from "./fetchurls.utils"
import { urls, expectedRespoonse } from "./fetchurls.utils.test.stub"

describe("Test getPaginatedUrls()", () => {
    it("should return the proper value for paginated urls", () => {
      const index = 0;
      const response = getPaginatedUrls(urls, index);
      expect(response).toMatchObject(expectedRespoonse);
    });
});

describe("Test getIndex()", () => {
    it("should return index value = 0, for cursor= '' ", () => {
      const cursor = "";
      const response = getIndex(urls, cursor);
      const expectedRespoonse = 0;
      expect(response).toEqual(expectedRespoonse);
    });

    it("should return index value = 2, for cursor with non empty value ", () => {
      const cursor = "d3f16e94-8709-40b9-bb95-b99e82e36f84";
      const response = getIndex(urls, cursor);
      const expectedRespoonse = 2;
      expect(response).toEqual(expectedRespoonse);
    });

});