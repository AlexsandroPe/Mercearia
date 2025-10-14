import { MapPin } from 'lucide-react-native';
import {View, Text, Image} from 'react-native';
import styles from './styles.js'
export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <Image source={require('../../assets/images/icons/map-pin.png')} />
                <Text>{"location"}</Text>
            </View>
            <View>
                <Image source={require('../../assets/images/user-profile.png')} style={{height: 40, width: 40}}/>
            </View>
        </View>
    )
}