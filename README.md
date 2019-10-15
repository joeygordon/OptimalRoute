# Optimal Route
Find the most optimal travel route form your chosen destinations.

## Instructions
1. Select at least 2 jobsite addresses
2. Press Create Route button to calculate your route
3. Tap on each step of the route to get directions from the previous step

## Installation
#### Using Yarn
* clone or download this repo to your machine
* `cd` into the app directory, and run the `yarn` command
* `cd ios; pod install` to install iOS dependencies

#### Using NPM
* clone or download this repo to your machine
* `cd` into the app directory, and run the `npm i` command
* `cd ios; pod install` to install iOS dependencies

## Running The App
* *iOS Simulator* - `yarn ios` or `npm run ios` to run on iPhone 11 simulator
   (Note: This command forces the iPhone 11 simulator because I had some issues with macOS 10.15 and react native getting along with older simulators.)
* *Android Simulator* - `yarn android` or `npm run android` to run on Android simulator

## Technology Decisions
- Everything was built in React Native.
- I tried to stick with native javascript features wherever possible to keep things simple
(`fetch()` instead of axios; native `.map`, `.filter`, etc vs a library like lodash)
- RouteXL API - https://www.routexl.com

#### Hooks vs Class Components
I chose to use functional components with hooks throughout the app to stay up to date with current React patterns.

