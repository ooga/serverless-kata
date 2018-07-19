# serverless-kata

We will see how to develop a quick REST endpoint and deploy it on AWS Lambda with the serverless framework

https://github.com/ooga/serverless-kata

## Installation

`$ npm install -g serverless`

### Quick look

- What is serverless framework ?

- Config

- Status code https://serverless.com/framework/docs/providers/aws/events/apigateway#status-codes

## Steps

### AWS config

- Create an AWS user following this steps https://serverless.com/framework/docs/providers/aws/guide/credentials#creating-aws-access-keys
- add a named profile on `~/.aws/credentials`

  ```
  [kata]
  aws_access_key_id = XXXXXXXXXX
  aws_secret_access_key = xxXXXxxXXxXxXXXXxxx
  ```

- add profile in your serverless config
  ```
  provider:
    profile: kata
  ```

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
