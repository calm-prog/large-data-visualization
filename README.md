This is an app that processes and displays large mocked data in a line chart.

## How to run the app

1. Download the project from the `main` branch

2. In a terminal from the root directory run `npm install`

3. Run the app with `npm run dev:mocks` (starts the mock server alongside the Vite dev server)

4. Open the app in a browser on http://localhost:5173/

## Project overview

The app is bootstrapped with [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Vite CLI"), uses [Material UI](https://mui.com/material-ui/all-components/ "MUI components") components, and it consumes mocked api set up with [mocks-server](https://www.mocks-server.org/docs/overview/ "mocks-server docs").

Directory structure:
```
root
├── mocks
│   ├── routes
│   └── utilities
├── node_modules
└── src
    ├── client
    └── utilities
```

## How to run unit tests

For unit tests [Jest](https://jestjs.io/) is used. Currently, the function that generates api data is covered with tests based on the requirements.

To run the tests:
```bash
npm run test
```

## How to inspect the mocked api
The mocked api is served on http://localhost:3100/api/data

You can start the mock server separately with:
```bash
npm run mocks
```

You can inspect the mocked API using a browser, curl, Postman, or any other HTTP client.

Example using curl:

```bash
curl http://localhost:3100/api/data
```

## Features to add

To make the project complete here are some considerations:

+ **Server response time**: Add timeout for server response and a loading state on the UI
+ **Error response**: Add error scenario in both mocked api and frontend
+ **Wait for server**: Wait for the server to be created before starting the app in the `dev:mocks` script
+ **Create tests on the API**: The server can be created programmatically inside a test file and can be covered with async tests
+ **Performance tests**: Test data processing speed, component render
+ **Performance optimization**: Memoize computed values (eg. `chunkedValues`), implement streaming
