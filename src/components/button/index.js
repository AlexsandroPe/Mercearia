import {TouchableOpacity, Text} from 'react-native';
import styles from './styles.js'
import { useNavigation } from '@react-navigation/native';
import { ArrowRight } from 'lucide-react-native';
export default function Button({screen}) {
    const navigation = useNavigation(); 
    
    function handleNav(route){ 
        navigation.navigate(route);
    }
    return (
        <TouchableOpacity onPress={() => handleNav(screen)} style={styles.buttonContainer} activeOpacity={0.7}>
            <Text style={styles.title}>INICIAR</Text>
            <ArrowRight color="#fff" size={26}/>
        </TouchableOpacity>
    )
}