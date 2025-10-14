import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 170,
    flexDirection: "row",
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#C5D7B1",
  },

  titleVertical: {
    textAlign: 'center',
  },
  titleContainer: {
    height: 60,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: '#717d627e',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  vertical: {
    height: 180,
    width: 130,
    gap: 10,
    flexDirection: 'column',
    backgroundColor: "#C5D7B1",
    borderRadius: 16,
    overflow: "hidden",
  },
  locationContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center"
  },
});

export default styles;
