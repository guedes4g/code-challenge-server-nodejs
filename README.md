# Pragmateam code challenge server (NodeJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts
- `npm start` - Start the application (Port 8081)
- `npm start:dev` - Start the application (Port 8081) on development mode
- `npm test` - Runs available tests

## Improvements
- Code Structure (Basic architecture MVC)
- Created Products route
- Divided application into two different domains (Products and Sensors) 
- Added unit and integration tests
  - Focused on integration tests, since the backend is very simple. Additionally, due to time constraint I choose integration test over unit tests once there were fewer to implement in order to improve coverage with meaningfull tests.
- Added basic validations to the api
- Added basic error handler

## Next Improvements
- Add application configuration (eg. Port, remove hardcoded urls)
- Add logging
- Better error handling
- Cache Requests to sensors api (Assumption: would be useful if there are multiple users at the same time for the same sensors/products)
- Handle sensors api error/unavailability
- Use a database to register products
- Continue to add/improve tests (only a few available due to time constraints)
- Add pagination to prevent large data retrivals
- Check if route /temperature can be deprecated (are there other clients using?)
- Optimize Build and Run for production
- Add linters 
- Check if existing pipeline contains minimal setup run tests and other quality checks before deploying, which branches it uses to deploy to production

## Further Improvements Ideas
- Use Nestjs, reasons:
  1. It is a opinionated Framework (good for large teams since adds a programming model)
  1. Nest provides an out of the box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled and easily maintainable applications.
  1. Dependency injection out of the box
  1. It uses express/fastify under the hood.