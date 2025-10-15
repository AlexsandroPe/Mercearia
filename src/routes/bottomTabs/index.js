import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/search';
import Carrinho from '../../screens/carrinho';
import {HomeIcon, SearchIcon, ShoppingBag } from 'lucide-react-native';
import Home from '../../screens/home';
const {Navigator, Screen} = createBottomTabNavigator();

export default function BottomTabRoutes() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{tabBarShowLabel: false,
             tabBarStyle: {height: 80, paddingTop: 10}, 
             headerShown: false}}>
            <Screen name='Home' component={Home} options={{
                tabBarIcon: ({focused}) => (<HomeIcon size={30} color={focused ? "#92B6FA" : "#000"} />)
            }}/>
            <Screen name='Search' component={Search} options={{
                tabBarIcon: ({focused}) => (<SearchIcon size={30} color={focused ? "#92B6FA" : "#000"}/>),
            }}/>
            <Screen name='Carrinho' component={Carrinho} options={{
                tabBarIcon: ({focused}) => (<ShoppingBag size={30} color={focused ? "#92B6FA" : "#000"} />)
            }}/>
        </Navigator>
    )
}

