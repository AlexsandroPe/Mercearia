import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/search';
import Carrinho from '../../screens/carrinho';
import {HomeIcon, SearchIcon, ShoppingBag } from 'lucide-react-native';
import Home from '../../screens/home';
const {Navigator, Screen} = createBottomTabNavigator();

export default function BottomTabRoutes() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{tabBarShowLabel: false, headerShown: false}}>
            <Screen name='Home' component={Home} options={{
                tabBarIcon: () => (<HomeIcon />)
            }}/>
            <Screen name='Search' component={Search} options={{
                tabBarIcon: () => (<SearchIcon />),
            }}/>
            <Screen name='Carrinho' component={Carrinho} options={{
                tabBarIcon: () => (<ShoppingBag />)
            }}/>
        </Navigator>
    )
}

