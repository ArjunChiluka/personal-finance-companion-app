import AsyncStorage from "@react-native-async-storage/async-storage";

const TRANSACTION_KEY = "transactions";

export const saveTransactions = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(TRANSACTION_KEY, jsonValue);
  } catch (error) {
    console.log("Error saving transactions:", error);
  }
};

export const getTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTION_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Error loading transactions:", error);
    return [];
  }
};


export const clearTransactions = async () => {
  try {
    await AsyncStorage.removeItem(TRANSACTION_KEY);
  } catch (error) {
    console.log("Error clearing transactions:", error);
  }
};