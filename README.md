This project was bootstrapped with Create React App.

## Required Update

Goto: src/components/specific/MovieGrid/Movie-Grid-container.js
MovieGridContainer.componentDidMount() the request requires a valid API Key.
Line 15: fetch('http://api.themoviedb.org/3/movie/popular?api_key=Insert_Your_API_Key_Here')



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run cypress`

Should launch cypress testing environment. <br>
Doesn't run correctly on my install, I use local Cypress to run tests. <br>
May work on your build. <br>
If not use local install of cypress and find movie-app folder to run tests. <br>


