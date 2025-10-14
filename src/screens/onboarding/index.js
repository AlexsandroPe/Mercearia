import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles'
import Button from '../../components/button'
export default function Onboarding() {
    return (
        <SafeAreaView style={{flex: 1, paddingVertical: 20}}>
            <Image source={require('../../assets/images/main_image.png')} style={styles.image} resizeMode='contain'/>

            <View style={styles.mainContent}>
                <Text style={[styles.text, styles.mainText]}>
                    Entregamos mantimentos à sua porta  
                </Text>
                <Text style={[styles.text, styles.secondText]}>
                    A mercearia oferece vegetais e frutas frescas. Encomende itens frescos na mercearia.
                </Text>
                <Button screen="BottomTabs" /> 
            </View>
        </SafeAreaView>
    )
}