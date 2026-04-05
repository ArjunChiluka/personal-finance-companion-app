import AsyncStorage from "@react-native-async-storage/async-storage";

const TRANSACTION_KEY = "transactions";

/**
 * Save transactions to local storage
 */
export const saveTransactions = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(TRANSACTION_KEY, jsonValue);
  } catch (error) {
    console.log("Error saving transactions:", error);
  }
};

/**
 * Load transactions from local storage
 */
export const getTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TRANSACTION_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log("Error loading transactions:", error);
    return [];
  }
};

/**
 * Clear all transactions (optional utility)
 */
export const clearTransactions = async () => {
  try {
    await AsyncStorage.removeItem(TRANSACTION_KEY);
  } catch (error) {
    console.log("Error clearing transactions:", error);
  }
};