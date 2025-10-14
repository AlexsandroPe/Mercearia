import {TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles.js'

export const icons = {
  fruits: require('../../assets/images/icons/fruits.png'),
  drinks: require('../../assets/images/icons/drinks.png'),
  grocery: require('../../assets/images/icons/grocery.png'),
  meats: require('../../assets/images/icons/meats.png'),
};



export default function CategoryCard({title, product, orientation}) {
    return (
        <TouchableOpacity style={orientation == 'vertical' ? [styles.vertical] : styles.container} activeOpacity={1}>
                <Image style={{alignSelf: 'center', flex: 1, height: 150, width: 150}} resizeMode='contain'  source={icons[product]}/>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleVertical}>{title}</Text>
                </View>
        </TouchableOpacity>
    )
}