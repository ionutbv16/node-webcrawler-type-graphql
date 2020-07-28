# node-webcrawler-type-graphql
Node , type-graphql, typescript, jest, cheerio, express, apollo-server-express, uuid

## &nbsp; Developer Ion Chirita

## &nbsp; Web Crawler with Cheerio. Type GraphQL Apollo Server with resolvers to fetch and paginate Links/Data crawled

Stack used for this project: 
```
	•	Typescript
 	•	Node
 	•	type-graphql
	•	cheerio
	•	GraphQL with Apollo Server
	•	express
	•	uuid

 ``` 
 

## &nbsp; How to run the code & Description 

 
```

How to install: 



1. Clone the repository
2. yarn install
3. yarn jest  - unit tests
4. yarn start 

A. The crawling process will be output in the console

B. http://localhost:4000/graphql   go to Playground



How project work



When node app is starting is going to automatically fetch URLS from a specified website. 
It can be changed from DOMAIN_TO_CRAWL inside  src/modules/config/config.ts 

For efficiency and time reasons crawled urls are being displayed inside console.

When all urls are crawled you will see a message on console: "Done crawling."



Graphql Server is starting, so URL can be fetched while crawl process is happening. 
Go to Playground http://localhost:4000/graphql  



  3.  How to fetch paginate crawled URLS 

       The pagination is set to 2 items per page from  PAGINATION_OFFSET  inside  src/modules/config/config.ts 

	( Unit tests for resolver are passing if you are keeping this value only. )

 	Query: 

	{

  fetchUrls (cursor: "") {

      urls {

        urla

        title

        id

      }
      cursor   
  }

} 



cursor argument is being used to do pagination. You will get a cursor property every time you do a request.

When is used as an argument you will fetch the next 2 items from url list.


Implementation: 


For time reasons the crawled urls are being stored inside an object and send to Grapqhl server from context.

The ideal case is to store them into database / redis to optimize the process.

```

##  &nbsp; Tests
Tests are available by running the following command:
```sh
yarn test a
```


