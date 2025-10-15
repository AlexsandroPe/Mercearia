import { MapPin } from 'lucide-react-native';
import {View, Text, Image} from 'react-native';
import styles from './styles.js'
import * as Location from 'expo-location'
import { useEffect, useState } from "react";

export default function Header() {

    const [location, setLocation] = useState();
    const [address, setAddress] = useState(null);

    const [errorMsg, setErrorMsg] = useState();
    useEffect(() => {
        async function getCurrentLocation() {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                console.log('Permission to access location was denied');
                return
            }
      
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location)
            const geocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            if (geocode.length > 0) {
                const place = geocode[0];
                const formatted = `${place.subregion}, ${place.region}`;
            setAddress(formatted);
            }
        }
        getCurrentLocation();
    }, [])

    let text = 'Carregando localização...';
    if (errorMsg) {
        text = errorMsg;
    } else if (address) {
        text = address;
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <Image source={require('../../assets/images/icons/map-pin.png')} />
                <Text>{text}</Text>
            </View>
            <View>
                <Image source={require('../../assets/images/user-profile.png')} style={{height: 40, width: 40}}/>
            </View>
        </View>
    )
}