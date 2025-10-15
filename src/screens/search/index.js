import {SafeAreaView} from 'react-native-safe-area-context';
import Order from '../../components/order'
import Header from '../../components/header';
import { SearchIcon } from 'lucide-react-native';
import styles from './styles.js'
import CategoryCard from '../../components/categoryCard/index.js';
import { products } from '../../data/index.js';
import { useState } from 'react';
import { FlatList, ScrollView, Text, TextInput, View } from 'react-native';
export default function Search() {
   const [searchText, setSearchText] = useState('');

    const getFilteredProducts = () => {
        let filtered;
        let list = products
        if (searchText.trim()) {
            filtered = list.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        }
        return filtered;
    };

    const filteredList = getFilteredProducts() ;
    return (
      <SafeAreaView style={{flex:1, gap: 20, paddingHorizontal: 16}}>
            <Header />
            <View style={{paddingHorizontal: 26, paddingVertical: 24}}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        onChangeText={(value) => {
                            setSearchText(value)
                        }}
                        style={{flex: 1}}/>
                        <SearchIcon size={26} color="#828B93"/>
                    </View>
            </View>
                <View style={{flexDirection: 'row', justifyContent: "center", flexWrap: 'wrap', gap: 8}}>
                    <CategoryCard title="Frutas" product='fruits'/>
                    <CategoryCard title="Diversos" product='grocery'/>
                    <CategoryCard title="Açougue" product='meats' />
                    <CategoryCard title="Bebidas" product='drinks' />
                </View>

                <View style={{gap: 10, flex: 1,height: 200}}>
                    {filteredList ? (<Text>Lista</Text>) : null}
                    <FlatList 
                        data={filteredList}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Order name={item.name} img={item.category} price={item.price}/>
                        )}
                    />
                </View>
      </SafeAreaView>
    )
}