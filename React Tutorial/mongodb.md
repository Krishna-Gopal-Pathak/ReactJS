## Update
- Will not return the updated document
- If two users are trying to update the same document at the same time using update, it is possible that both updates will succeed, which     could lead to data corruption.
- For example, if you are updating a document to reflect a change in some external state, you may not need to return the updated document.

## findOneAndUpdate
- will return the updated document
- If two users are trying to update the same document at the same time using findOneAndUpdate, only one of the updates will succeed.
- For example, if you are updating a document and then displaying it to the user, you will need to return the updated document.

## drop()
- drop() function removes the specified collection from the database.

## remove()
- remove() function deletes document from a collection.

## createIndex()
- createIndex() builds an index on a collection.


## reIndex()
- Rebuilds all existing indexes on a collection.

## Get system info
- db.hostInfo() method

## Remove Current database
- db.dropDatabase()

## Rename a collection
- db.collection.renameCollection()

## findAndModify
- You should use findAndModify when you need to perform more than just an update, such as deleting or replacing a document. You should also   use findAndModify when you need to sort the documents before updating them.

## How does MongoDB handle data backup and recovery?
- MongoDB provides several backup and recovery options, including hot backups, point-int-time recovery, and incremental backups.

## Difference b/w join and lookup?
- joins involves combining data from multiple collection
- lookup involves retrieving related data from another collection.

## how does MongoDB handle security?
- MongoDB provides several security features, including authentication, authorization, encryption and auditing.

## Role of mongo shell in MongoDB?
- mongo shell is a command-line interface that allows users to interact with MongoDB and perform administrative tasks.

## role of mongod process in MongoDB?
- Mongod process is the primary daemon process in MongoDB that manages data storage, indexing, and access.

## How does MongoDB handle transaction?
- MongoDB supports ACID properties.

## How does MongoDB handle schema changes?
- MongoDB allows for flexible schemas and schemas changes can be made without affecting existing data.

## How does MongoDB ensure data consistency?
- MongoDB uses a two-phase commit protocol to ensure data consistency in distributed environment

##  What is difference b/w primary key and secondary key in MongoDB?
- A primary key is a unique identifier for a document.
- A secondary key is used for indexing and querying data.

## What is GridFS in MongoDB?
- GridFS is a specification for storing and retrieving large files, such as images and videos in MongoDB.

## update and save?
- update: update existing document
- save: update existing document and insert new document if not exist.

## What is aggregation pipeline in MongoDB?
- aggregation pipeline is a framework in MongoDB that allows for the processing of data through a series of stages, including filter,   sorting, grouping, and transforming data.

## What is MapReduce in MongoDB?
- MapReduce is a data processing technique in MongoDB that involves mapping data to a set of key-value pair.

## Different types of indexing in MongoDB?
- single field
- compund field
- multi-key
- text
- geospatial indexing

## What is indexing in MongoDB?
- Indexing in MongoDB is the process of creating an index on a field in a collection to improve query performance.

## what is sharding in MongoDB?
- Sharding in MongoDB is a method of partition data across multiple server to improve performance and scalability.

## What is replica set in MongoDB?
- A replica set in MongoDB is a group of MongoDB servers that stores same data to provide redundancy and high availability.

## What is collection in MongoDb?
- A collection in MongoDB is a group of document that share similar structure. It is equivalent to a table in relational database.

## Aggregation in mongoDB?
- Aggregation in Mongoose is a powerful feature that allows you to perform complex data transformation and analysis operations on your MongoDB collections. It enables you to process and   manipulate data, calculate values, and obtain results that may not be achievable with simple find or query operations.

## 