# serverless-kata

We will see how to develop a quick REST endpoint and deploy it on AWS Lambda with the serverless framework

## Installation

`$ npm install -g serverless`

### Quick look

- Config

- Status code https://serverless.com/framework/docs/providers/aws/events/apigateway#status-codes

- What is serverless framework ?

## Steps

### AWS config

- Create an AWS user
- add a named user on aws-cli
- add profile in your serverless config

### First deploy

- Deploy the `user` function

### New endpoint

- Add the `serverless-offline` plugin, you will use it to validate your development locally

- Create a new function `userById` based on this criterias:

  - The function should return a single user matching the provided id
  - Should be accessible at `/users/{userId}`
  - Should return an http code 404 and a message when the id does not match any user

- Deploy the `userById` function

### Use real DB

- Add the `serverless-dynamodb-local` plugin, you will use it to validate your development locally

- Use DynamoDB to save users

- Remove the mock data `datas/users.ts`

## Bonus

- Browse list of availables plugins
