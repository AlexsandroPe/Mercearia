import {View, Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header';
import { SearchIcon } from 'lucide-react-native';
import styles from './styles.js'
import CategoryCard from '../../components/categoryCard/index.js';
export default function Search() {
    return (
        <SafeAreaView style={{flex:1, paddingHorizontal: 16}}>
            <Header />
            <View style={{paddingHorizontal: 26, paddingVertical: 24}}>
                <View style={styles.inputContainer}>
                    <TextInput style={{flex: 1}}/>
                    <SearchIcon size={26} color="#828B93"/>
                </View>
              
            </View>
            <View style={{flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                <CategoryCard title="Frutas" product='fruits' />
                <CategoryCard title="Diversos" product='grocery' />
                <CategoryCard title="Açougue" product='meats' />
                <CategoryCard title="Bebidas" product='drinks' />
            </View>
        </SafeAreaView>
    )
}