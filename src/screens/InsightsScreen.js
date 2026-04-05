import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS, SHADOW } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

export default function InsightsScreen() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const byCategory = transactions.reduce((acc, t) => {
    if (!acc[t.category]) acc[t.category] = 0;
    acc[t.category] += t.amount;
    return acc;
  }, {});

  const categoryArray = Object.keys(byCategory).map((key) => ({
    category: key,
    amount: byCategory[key],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Insights</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Total Income</Text>
        <Text style={[styles.value, { color: COLORS.income }]}>₹{income}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Total Expenses</Text>
        <Text style={[styles.value, { color: COLORS.expense }]}>₹{expenses}</Text>
      </View>

      <Text style={styles.section}>Spending by Category</Text>

      {categoryArray.length === 0 ? (
        <Text style={styles.empty}>No transactions yet</Text>
      ) : (
        <FlatList
          data={categoryArray}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <Text style={styles.catName}>{item.category}</Text>
              <Text style={styles.catAmount}>₹{item.amount}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: COLORS.background },

  header: { fontSize: 26, fontWeight: "bold", marginBottom: 15 },

  card: {
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    ...SHADOW,
  },

  label: { color: COLORS.subtext, fontSize: 12 },

  value: { fontSize: 16, fontWeight: "bold", marginTop: 5 },

  section: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },

  empty: { textAlign: "center", color: COLORS.subtext, marginTop: 10 },

  categoryCard: {
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    ...SHADOW,
  },

  catName: { fontSize: 16, fontWeight: "bold" },
  catAmount: { fontSize: 16, fontWeight: "bold" },
});