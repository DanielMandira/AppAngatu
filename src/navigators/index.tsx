import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from 'react-native';
import Home from '../home/index';
import Feed from "../feed";
import Mapa from '../mapa/index';
import { FontAwesome5 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('screen');
const HomeTabs: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#00726D',
                borderTopWidth: 0,
                width: width,
                justifyContent: 'space-around'
            }
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                headerTransparent: true,
                title: 'Home',
                headerShown: false,
                tabBarIcon: () => (<FontAwesome5 name="home" size={26} color="#FFF" />),
                tabBarLabel: 'Home',
                tabBarHideOnKeyboard: true,
                unmountOnBlur: true,
                tabBarActiveTintColor: '#CCC',
                tabBarInactiveTintColor: '#FFF',
                tabBarActiveBackgroundColor: '#004F4B'
            }} />

            <Tab.Screen name='Feed' component={Feed} options={{
                headerTransparent: true, title: 'Feed',
                headerShown: false,
                tabBarIcon: () => (<FontAwesome5 name="play-circle" size={26} color="#FFF" />),
                tabBarLabel: 'Feed',
                tabBarHideOnKeyboard: true,
                unmountOnBlur: true,
                tabBarActiveTintColor: '#CCC',
                tabBarInactiveTintColor: '#FFF',
                 tabBarActiveBackgroundColor: '#004F4B'
            }} />
            <Tab.Screen name='Mapa' component={Mapa} options={{
                headerTransparent: true, title: 'Mapa',
                headerShown: false,
                tabBarIcon: () => (<FontAwesome5 name="map-marked-alt" size={26} color="#FFF" />),
                tabBarLabel: 'Mapa',
                tabBarHideOnKeyboard: true,
                unmountOnBlur: true,
                tabBarActiveTintColor: '#CCC',
                tabBarInactiveTintColor: '#FFF',
                 tabBarActiveBackgroundColor: '#004F4B'
            }} />


        </Tab.Navigator>
    );
};
export default HomeTabs;