# Optimal Route
Find the most optimal travel route form your chosen destinations.

## Instructions
1. Select at least 2 jobsite addresses
2. Press Create Route button to calculate your route
3. Tap on each step of the route to get directions from the previous step

## Installation
`cd` into the app directory, and run the `yarn` command

## Running The App
* *iOS Simulator* - `yarn ios` to run on iPhone 11 simulator
* *Android Simulator* - `react-native run-android`

## Technology Decisions
- Everything was built in React Native.
- I tried to stick with native javascript features wherever possible to keep things simple
(`fetch()` instead of axios; native `.map`, `.filter`, etc vs a library like lodash)
- RouteXL API - https://www.routexl.com

#### Hooks vs Class Components
I chose to use functional components with hooks throughout the app to stay up to date with current React patterns.

