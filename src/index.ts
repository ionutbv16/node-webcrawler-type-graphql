
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import {crawledPagesData,  crawl } from "./modules/crawler/crawl"
import {schema as iSchema} from "./gqutils/schema"

crawl();

const main = async () => {

  const schema =  await iSchema()
  const context: any = {
    contextUrls: crawledPagesData
  };

  const apolloServer = new ApolloServer({ 
    schema, 
    context,
});

  const app = Express();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();