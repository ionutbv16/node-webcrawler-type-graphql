import { PAGINATION_OFFSET } from "../config/config"
import { Url} from "../types/urls"

export const getPaginatedUrls = (urls: Url[], index: number) : Url[] => urls.slice(index, index + PAGINATION_OFFSET)

export const getIndex = (urls: Url[], cursor: string) : number => {
    let theIndex = urls.findIndex( (element: Url) => element.id === cursor)
    return theIndex = theIndex < 0 ? 0 : theIndex + 1
}