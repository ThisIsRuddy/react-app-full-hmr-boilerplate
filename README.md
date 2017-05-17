# react-app-full-hmr-boilerplate
Bare-bones react app with back-end bundled with hmr and front-end hmr

## Deploy
`docker-compose build && docker-compose up -d`

# Front-end HMR:
- navigate to localhost:8080
- edit App.js and save, this triggers:
1. compiling of new chunks
2. hot reload sent to connected clients with new chunks
	
# Back-end HMR:
- navigate to localhost:8080/api (gets proxied to server:3000)
- edit server.js and save this triggers:
1. compiling of new chunks (including new imports if npm installed on docker container)
- refresh page to see HMR result (simulates a new api call)
