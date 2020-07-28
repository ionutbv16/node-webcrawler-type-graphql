import { Resolver, Query, Arg , Ctx} from "type-graphql";
import {Pagination, Url} from "../types/urls"
import {getPaginatedUrls, getIndex} from "./fetchurls.utils"

@Resolver()
export class FetchUrls {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  @Query(() => Pagination)
  async fetchUrls(@Arg("cursor")  cursor: string,  @Ctx("contextUrls") contextUrls: [Url] ) {
    const theCursor = cursor || '';
    const theIndex = getIndex(contextUrls, theCursor)
    const paginatedUrls = getPaginatedUrls(contextUrls, theIndex)
    const lastCursor: string = paginatedUrls[paginatedUrls.length-1].id
    const returnResolver = { urls: paginatedUrls, cursor: lastCursor }
    return returnResolver;
  }
}