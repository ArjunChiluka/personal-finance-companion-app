import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, SHADOW } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

export default function GoalsScreen() {
  const { goal, setGoal, saved, addSavings } = useContext(FinanceContext);
  const [input, setInput] = useState(""); // For amount to add

  const handleAdd = () => {
    const amount = Number(input);
    if (!amount || amount <= 0) {
      Alert.alert("⚠ Enter a valid amount");
      return;
    }

    addSavings(amount);
    setInput(""); // Clear input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monthly Savings Goal</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Set Goal Amount</Text>
        <TextInput
          placeholder="Enter goal amount"
          value={goal ? goal.toString() : ""}
          onChangeText={(text) => setGoal(Number(text))}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Add Savings</Text>
        <TextInput
          placeholder="Enter amount"
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add Savings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Saved:</Text>
        <Text style={[styles.value, { color: COLORS.income }]}>₹{saved}</Text>
      </View>
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
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginTop: 8,
    ...SHADOW,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});