import { StyleSheet, Text, View } from "react-native";

export default function SummaryCard({ title, amount }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>₹{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
  },
  title: {
    fontSize: 14,
    color: "#666",
  },
  amount: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 5,
  color: "#2e7d32", 
},
});