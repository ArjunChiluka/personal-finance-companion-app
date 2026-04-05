import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SHADOW } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

export default function TransactionItem({ item, navigation }) {
  const { deleteTransaction } = useContext(FinanceContext);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { borderLeftColor: item.type === "income" ? COLORS.income : COLORS.expense },
      ]}
      activeOpacity={0.7}
    >
      <View>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.date}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>

      <View>
        <Text
          style={[
            styles.amount,
            { color: item.type === "income" ? COLORS.income : COLORS.expense },
          ]}
        >
          ₹{item.amount}
        </Text>

        <View style={styles.actions}>
          <Text onPress={() => navigation.navigate("EditTransaction", { item })} style={styles.edit}>
            Edit
          </Text>
          <Text onPress={() => deleteTransaction(item.id)} style={styles.delete}>
            Delete
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 5,
    ...SHADOW,
  },

  category: { fontSize: 16, fontWeight: "bold" },

  date: { color: COLORS.subtext, fontSize: 12 },

  amount: { fontSize: 16, fontWeight: "bold", textAlign: "right" },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },

  edit: { marginRight: 10, color: COLORS.primary },

  delete: { color: COLORS.expense },
});