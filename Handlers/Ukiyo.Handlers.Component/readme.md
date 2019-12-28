# Ukiyo Components Handlers
### Contains the controllers and handlers required to run the application

This app uses dotnetcore3.0 which is currently not a supported runtime in AWS, so the app currently runs using a custom runtime.
Planning on using the serverless framework when support for it comes

## Setup
- The api is wrapped for serverless, but it only needs to be serverless, on deployment. 
Running it with `dotnet watch run` is a much better option, especially for offline development.
- To help leverage the offline testing funtionality, appsettings.{?stage}.json is 
being used for different configs on different staging environments. (ex: database config)

## Deployment
- Set up aws-lambda-tools-default.json for region and bucket settings (Make sure bucket exists)
- Set up serverless.template which inc. cloudformation settings
- Run `dotnet lambda deploy-serverless`