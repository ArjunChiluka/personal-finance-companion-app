import { useContext } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { COLORS, SHADOW } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

const screenWidth = Dimensions.get("window").width;

export default function DashboardScreen() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;
  const total = income + expenses;

  const chartData =
    total === 0
      ? [
          { name: "No Data", amount: 1, color: "#ccc", legendFontColor: "#333", legendFontSize: 12 },
        ]
      : [
          { name: "Income", amount: income, color: COLORS.income, legendFontColor: "#333", legendFontSize: 12 },
          { name: "Expense", amount: expenses, color: COLORS.expense, legendFontColor: "#333", legendFontSize: 12 },
        ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.label}>Balance</Text>
          <Text style={[styles.value, { color: balance < 0 ? COLORS.expense : COLORS.text }]}>
            ₹{balance}
          </Text>
          {balance < 0 && <Text style={styles.warning}>⚠ Overspending</Text>}
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Income</Text>
          <Text style={[styles.value, { color: COLORS.income }]}>₹{income}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Expenses</Text>
          <Text style={[styles.value, { color: COLORS.expense }]}>₹{expenses}</Text>
        </View>
      </View>

      <Text style={styles.section}>Spending Overview</Text>

      <PieChart
        data={chartData}
        width={screenWidth - 20}
        height={220}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft="10"
        absolute
        chartConfig={{
          color: () => "#000",
        }}
      />

      {total > 0 && (
        <Text style={styles.insight}>
          Income: {Math.round((income / total) * 100)}% | Expense:{" "}
          {Math.round((expenses / total) * 100)}%
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: COLORS.background },

  header: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },

  cardRow: { flexDirection: "row", justifyContent: "space-between" },

  card: {
    width: "30%",
    backgroundColor: COLORS.card,
    padding: 12,
    borderRadius: 12,
    ...SHADOW,
  },

  label: { color: COLORS.subtext, fontSize: 12 },

  value: { fontSize: 16, fontWeight: "bold", marginTop: 5 },

  warning: { color: COLORS.expense, fontSize: 10, marginTop: 5 },

  section: { marginTop: 20, fontSize: 18, fontWeight: "bold" },

  insight: { textAlign: "center", marginTop: 10 },
});