# SDM

This repo contains 2 projects:
* api: A very simple API
* ui. A very simple UI

## API & Full API

Created using Spring Boot. In order to build any of the two projects and create the docker image execute similar steps, changing api by full-api when needed. 

To build api:
```
cd api
mvn clean package
build -t api .
```

To run the project locally:
```
java -jar target/api-0.0.1-SNAPSHOT.jar
```

Available endpoint:
```
$ curl http://localhost/hello
Hello World from the Server Side!
```

## UI

Created using [CRA](https://github.com/facebook/create-react-app). In order to build the UI:
```
cd ui
npm run build
```

To run the project locally:
```
npm start
```
