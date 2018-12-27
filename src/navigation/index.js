import { createStackNavigator } from 'react-navigation';
import Home from '@/views/Home';
import Record from '@/views/Record';

const routeConfigs = {
  Home: {
    screen: Home,
  },
  Record: {
    screen: Record,
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
};

const AppNavigator = createStackNavigator(routeConfigs, StackNavigatorConfig);

export default AppNavigator;