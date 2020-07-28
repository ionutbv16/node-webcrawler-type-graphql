import { ObjectType, Field} from "type-graphql";

@ObjectType()
export class Url {
  
  @Field()
  id: string;

  @Field()
  urla: string;

  @Field()
  title: string;
}

@ObjectType()
export class Pagination  {

  @Field(() => [Url])
  urls: [Url];

  @Field()
  cursor: string;
}
