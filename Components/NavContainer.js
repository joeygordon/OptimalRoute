import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CreateScreen from './CreateScreen';
import BuildRouteScreen from './BuildRouteScreen';
import {stackNavConfig} from '../consts/config';

const CreateStack = createStackNavigator(
  {
    Home: CreateScreen,
    BuildRoute: BuildRouteScreen,
  },
  stackNavConfig,
);

export default createAppContainer(CreateStack);
