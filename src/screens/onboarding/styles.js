import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  mainContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 24
  },

  text: { 
    textAlign: 'center',
  },
  mainText: {
    fontWeight: 700,
    fontSize: 48,
  },
  secondText: {
    fontSize: 16,
  },
  image: {
    height: 480,
    alignSelf: 'center',
  },
});

export default styles