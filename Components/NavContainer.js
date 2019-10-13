import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Create from './Create';
import BuildRoute from './BuildRoute';
import Today from './Today';
import Unscheduled from './Unscheduled';
import {stackNavConfig} from '../consts/config';

const TodayStack = createStackNavigator(
  {
    Today: Today,
  },
  stackNavConfig,
);

const CreateStack = createStackNavigator(
  {
    New: Create,
    BuildRoute: BuildRoute,
  },
  stackNavConfig,
);

const UnscheduledStack = createStackNavigator(
  {
    Unscheduled: Unscheduled,
  },
  stackNavConfig,
);

const TabNavigator = createBottomTabNavigator({
  Schedule: TodayStack,
  New: CreateStack,
  Unscheduled: UnscheduledStack,
});

export default createAppContainer(TabNavigator);
