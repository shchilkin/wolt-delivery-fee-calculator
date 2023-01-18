# Delivery fee calculator

A frontend application for calculating delivery price using provided specifications. Done as a pre-assignment for summer
2023 Wolt engineering internship.

## Prerequisites

This project uses [Yarn](https://yarnpkg.com/) as a package manager. You can install it by following the instructions on
their website or using Homebrew:

```bash
brew install yarn
```

## Installation

Run the following command to install all dependencies:

```bash
yarn install
```

Run the following command to start the development server:

```bash
yarn start
```


## Specifications (provided by [Wolt](https://wolt.com))

Rules for calculating a delivery fee

* If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the
  difference between the cart value and 10€. For example if the cart value is 8.90€, the surcharge will be 1.10€.
* A delivery fee for the first 1000 meters (=1km) is 2€. If the delivery distance is longer than that, 1€ is added for
  every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance
  would be shorter than 500 meters, the minimum fee is always 1€.
    * Example 1: If the delivery distance is 1499 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m
      => 3€
    * Example 2: If the delivery distance is 1500 meters, the delivery fee is: 2€ base fee + 1€ for the additional 500 m
      => 3€
    * Example 3: If the delivery distance is 1501 meters, the delivery fee is: 2€ base fee + 1€ for the first 500 m + 1€
      for the second 500 m => 4€
* If the number of items is five or more, an additional 50 cent surcharge is added for each item above five. An extra "
  bulk" fee applies for more than 12 items of 1,20€
    * Example 1: If the number of items is 4, no extra surcharge
    * Example 2: If the number of items is 5, 50 cents surcharge is added
    * Example 3: If the number of items is 10, 3€ surcharge (6 x 50 cents) is added
    * Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
* The delivery fee can __never__ be more than 15€, including possible surcharges.
* The delivery is free (0€) when the cart value is equal or more than 100€.
* During the Friday rush (3 - 7 PM UTC), the delivery fee (the total fee including possible surcharges) will be
  multiplied by 1.2x. However, the fee still cannot be more than the max (15€).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn test:utils`

Launches the test runner for utility functions in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Technologies used

- [Create React App](https://create-react-app.dev/) - for project setup
- [React](https://reactjs.org/) - UI Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Javascript superset for type safety
- [Jest](https://jestjs.io/) - Testing library for unit testing
- [prettier](https://prettier.io/) - Code formatter
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Notistack](https://iamhosseindhv.com/notistack) - Library for displaying notifications
- [vercel](https://vercel.com/) - For hosting the application

## License

Licensed under the MIT License, Copyright © 2022 Aleksandr Shchilkin See [LICENCE](LICENCE) for more information.

## Acknowledgements
Thanks to [Wolt](https://wolt.com/) for providing the assignment.

## Screenshots
Delivery fee preview UI
![Delivery fee preview UI](./screenshots/delivery-fee-preview.png)

Delivery fee calculator UI
![Delivery fee calculator UI](./screenshots/delivery-fee-calculator.png)
