import { useContext, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { COLORS } from "../constants/theme";
import { FinanceContext } from "../context/FinanceContext";

export default function AddTransactionScreen({ navigation }) {
  const { addTransaction } = useContext(FinanceContext);

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleAdd = () => {
    if (!amount || !category) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    addTransaction({
      id: Date.now(),
      amount: Number(amount),
      category,
      type,
      date: new Date(),
    });

    Alert.alert("Success", "Transaction Added ✅");

    // ✅ GO BACK (NOT HOME)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>

      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <Text>Select Type:</Text>

      <View style={styles.row}>
        <Button title="Income" onPress={() => setType("income")} />
        <Button title="Expense" onPress={() => setType("expense")} />
      </View>

      <Text>Selected: {type}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Save Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
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