import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabRoutes from '../bottomTabs';
import Onboarding from '../../screens/onboarding';
const {Navigator, Screen} = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Navigator initialRouteName='Onboarding' screenOptions={{headerShown:false}}>
            <Screen name='Onboarding' component={Onboarding} />
            <Screen name='BottomTabs' component={BottomTabRoutes}/>
        </Navigator>
    )
}