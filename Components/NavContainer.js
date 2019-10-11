import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Create from './Create';
import Today from './Today';
import Unscheduled from './Unscheduled';

const TodayStack = createStackNavigator({
  Today: Today,
});

const CreateStack = createStackNavigator({
  New: Create,
});

const UnscheduledStack = createStackNavigator({
  Unscheduled: Unscheduled,
});

const TabNavigator = createBottomTabNavigator({
  Today: TodayStack,
  New: CreateStack,
  Unscheduled: UnscheduledStack,
});

export default createAppContainer(TabNavigator);
