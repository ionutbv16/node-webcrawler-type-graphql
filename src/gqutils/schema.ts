import { buildSchema} from "type-graphql";
import { FetchUrls } from '../modules/resolvers/fetchurls'

export const schema = async () =>
  await buildSchema({
    resolvers: [FetchUrls],
  });