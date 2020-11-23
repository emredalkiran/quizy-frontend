# Getting Started with quizy

quizy is a to be SaaS solution addressing online quiz and survey utilities. This is only the frontend part of the whole project. You can reach backend repo at [quizy-backend](https://github.com/emredalkiran/quizy)

## Tools and Technologies Used

The project has been bootstrapped using create-react-app. On top of that, I've leveraged redux, redux-thunk and redux-toolkit as well as axios and react-router so far. For styling, I've used [Bulma](https://bulma.io/), an open source, css only framework with no JavaScript.

## Available Scripts

In the project directory, as the default scripts of create-react-app, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Please kindly note that test cases to be added shortly.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run css-watch`

I'm using SASS to override some defaults of the Bulma framework. You can use `custom-styles.css` under `sass` folder to customize the framework. Running `npm css-watch` command will build a fresh css file named `main.css` and will follow and any changes you made to compile a new version of the `main.css`.

## License

This project is licensed under [MIT License](https://opensource.org/licenses/MIT)
