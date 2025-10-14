import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles'
import { PencilIcon, PencilLine } from 'lucide-react-native';

export default function Order({name, date, price, quantity, img, color, dateShown=false }) { 
    return (
        <View style={styles.orderContainer}>
            <View style={styles.orderInfo}>
                <View style={[styles.imageContainer, {backgroundColor: color}]}>
                    <Image source={img}/>
                </View>
                    {
                        !dateShown ? (
                            <View style={styles.details}>
                                <Text style={{fontSize: 18}}>{name}</Text>
                                <Text style={{color: "#828B93"}}>{date}</Text>
                            </View>
                        ): (
                            <View style={styles.carrinhoDetails}>
                                <Text style={{fontSize: 18}}>{name}</Text>
                                <View style={{flexDirection: 'row', alignItems: "center", gap: 8}}>
                                    <Text style={{fontWeight: 700, fontSize: 14}}>{price}</Text>
                                    <Text style={{color: "#828B93", fontSize: 14, textAlign: "right"}}>{quantity}</Text>
                                </View>
                            </View>
                        )
                    }
            </View>
                {
                    dateShown ? (
                        <Pressable style={{justifyContent: 'center', flexDirection: 'row', gap: 6}}>
                            <PencilIcon color="#92B6FA" size={18} />
                            <Text style={{color: "#92B6FA"}}>Editar</Text>
                        </Pressable>
                    ) : (
                         <View style={styles.orderPrice}>
                         <Text style={{fontWeight: 800, fontSize: 18}}>{price}</Text>
                         <Text style={{color: "#828B93", fontSize: 12, textAlign: "right"}}>{quantity}</Text>
                        </View>
                    )
                }
               
        </View>
    )
}