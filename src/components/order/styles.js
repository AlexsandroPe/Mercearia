import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 40,
    width: 80,
  },
  carrinhoDetails: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  orderInfo: {
    flexDirection: 'row',
    flex: 1,
    fontSize: 18,
    fontWeight: 800,
  },

  details: { 
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  orderPrice: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles