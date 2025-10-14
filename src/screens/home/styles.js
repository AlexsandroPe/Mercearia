import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 22,
  },

  greetingMessage: {
    fontSize: 18,
    fontWeight: 800,
  },

  greeting: { 
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  categories: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles