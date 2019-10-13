import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Create from './Create';
import BuildRoute from './BuildRoute';
import {stackNavConfig} from '../consts/config';

const CreateStack = createStackNavigator(
  {
    Home: Create,
    BuildRoute: BuildRoute,
  },
  stackNavConfig,
);

export default createAppContainer(CreateStack);
