import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TransactionItem from "../components/TransactionItem";
import { COLORS } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

export default function TransactionsScreen({ navigation }) {
  const { transactions } = useContext(FinanceContext);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>

      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate("AddTransaction")}>
        <Text style={styles.addText}>+ Add Transaction</Text>
      </TouchableOpacity>

      <View style={styles.filters}>
        <Text style={styles.filter} onPress={() => setFilter("all")}>All</Text>
        <Text style={styles.filter} onPress={() => setFilter("income")}>Income</Text>
        <Text style={styles.filter} onPress={() => setFilter("expense")}>Expense</Text>
      </View>

      {filtered.length === 0 ? (
        <Text style={styles.empty}>No transactions</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TransactionItem item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: COLORS.background },

  header: { fontSize: 24, fontWeight: "bold" },

  addBtn: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
  },

  addText: { color: "#fff", textAlign: "center", fontWeight: "bold" },

  filters: { flexDirection: "row", justifyContent: "space-around" },

  filter: { color: COLORS.primary, fontWeight: "bold" },

  empty: { textAlign: "center", marginTop: 20 },
});