import { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function EditTransactionScreen({ route, navigation }) {
  const { item } = route.params;
  const { updateTransaction } = useContext(FinanceContext);

  const [amount, setAmount] = useState(item.amount.toString());
  const [category, setCategory] = useState(item.category);
  const [type, setType] = useState(item.type);

  const handleUpdate = () => {
    updateTransaction({
      ...item,
      amount: Number(amount),
      category,
      type,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Edit Transaction</Text>

      <TextInput
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
      />

      <TextInput
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <Text>Type:</Text>

      <View style={styles.row}>
        <Button title="Income" onPress={() => setType("income")} />
        <Button title="Expense" onPress={() => setType("expense")} />
      </View>

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});