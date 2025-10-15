import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ArrowRight, ChevronLeftCircle } from 'lucide-react-native';
import { ORDERS } from '../../data';
import Order from '../../components/order';
import { useNavigation } from '@react-navigation/native';

const total = ORDERS.reduce((acc, item) => {
  return acc + (item.price * item.quantity);
}, 0);

export default function Carrinho() {
    
    
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, gap: 30, paddingVertical: 26, paddingHorizontal: 26}}>
            <View style={{paddingHorizontal: 24}}>
                <ChevronLeftCircle onPress={() => navigation.goBack()} color={"#828B93"} size={50}/>
            </View>
            <View style={{flex: 2, gap: 20, paddingHorizontal: 26}} >
                <Text style={{fontSize: 40, fontWeight: 700}}>Meu carrinho</Text>
                  <FlatList
                        data={ORDERS}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        contentContainerStyle= {{gap: 20}}
                        renderItem={({ item }) => (
                          <Order dateShown img={item.category} name={item.name} date={item.date} color={item.color} price={item.price} quantity={item.quantity} />
                        )}

                    />
            </View> 

            <View style={{backgroundColor: "#92B6FA",flexDirection: 'row', alignItems: "center", padding: 30, borderRadius: 20, alignSelf: 'center', width: 330}}>
                
                <View style={{flex: 1,}}>
                    <Text style={{color: '#fff', fontSize: 16}}>Total a pagar</Text>
                    <Text style={{color: '#Fff', fontWeight: '700', fontSize: 16}}>{total.toFixed(2)}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row',borderWidth: 1, borderColor: "#fff", paddingVertical: 10, borderRadius: 20, paddingHorizontal: 18}}> 
                        <Text style={{color: '#fff', fontWeight: '700'}}>Pagar agora </Text>
                        <ArrowRight color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}