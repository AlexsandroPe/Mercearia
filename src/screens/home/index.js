import {
  View,
  Text,
  FlatList,
  ScrollView
} from "react-native";
import CategoryCard from '../../components/categoryCard'
import {ORDERS} from '../../data';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Header from '../../components/header'
import Order from "../../components/order";
export default function Home() {
 
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <View style={styles.greeting}>
        <Text style={{color: "#828B93", fontSize: 16}}>Seja bem-vindo,</Text>
        <Text style={styles.greetingMessage}>Vamos pedir itens fresquinhos para você?</Text>
      </View>

      <View>
        <Text style={{paddingHorizontal: 24, fontSize: 18}} >Categorias</Text>
        <ScrollView style={styles.categories} showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{alignItems: "center", gap: 10}}>
          <CategoryCard  title="Frutas" product="fruits" orientation='vertical'/>
          <CategoryCard  title="Diversos" product="grocery" orientation='vertical'/>
          <CategoryCard  title="Bebidas" product="drinks" orientation='vertical'/>
          <CategoryCard  title="Açougue" product="meats" orientation='vertical'/>
        </ScrollView>
      </View>
     
      <View style={{paddingHorizontal: 24, gap: 22}}>
        <Text style={{fontSize: 18}}>Minhas Compras</Text>
      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle= {{gap: 20}}
        renderItem={({ item }) => (
          <Order img={item.category} name={item.name} date={item.date} color={item.color} price={item.price} quantity={item.quantity} />
        )}
        />
      </View>
    </SafeAreaView>
  );
}

