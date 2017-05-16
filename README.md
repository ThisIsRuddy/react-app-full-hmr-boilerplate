# react-app-full-hmr-boilerplate
Bare-bones react app with back-end bundled with hmr and front-end hmr

`npm install`

then

`npm run install:server`

then

`npm run install:client`

then

`npm start` or `npm run start:win` for windows


Front-end HMR:
	- navigate to localhost:3001
	- edit App.js and save, this triggers:
		1. compiling of new chunks
		2. hot reload sent to connected clients with new chunks
	
Back-end HMR: 
	- navigate to localhost:3000/api
	- edit server.js and save this triggers:
		1. compiling of new chunks (including new package imports if npm installed)
	- refresh page to see HMR result (simulates a new api call)