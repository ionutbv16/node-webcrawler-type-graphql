import { graphql, GraphQLSchema } from "graphql";


import { schema  as iSchema  } from "./schema";

interface Options {
    source: string;
    variableValues?: any
    contextValue?: any;
  }
  

let schema: GraphQLSchema;

export const graphqlCall = async ({ source, variableValues, contextValue }: Options) => {
  if (!schema) {
    schema = await iSchema();
  }
  
  return graphql({
    schema,
    source,
    variableValues,
    contextValue
  });
};