import {DrawerNavigator, createStackNavigator} from 'react-navigation';

import Home from './home';
import Settings from './settings';
import SideMenu from './side-menu';
import Terms from './terms';

const stackSettings = createStackNavigator({
    SettingScreen: {screen: Settings},
    TermsScreen: {screen: Terms},
},{
    initialRouteName: 'SettingScreen',
});

export const Nav = DrawerNavigator({
    HomeScreen: {screen: Home},
    SettingStack: stackSettings
},{
    contentComponent: SideMenu
});
