import { createContext, useEffect, useState } from "react";
import { getTransactions, saveTransactions } from "../storage/storage";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const loadData = async () => {
    const data = await getTransactions();
    setTransactions(data);
  };

  const addTransaction = (txn) => {
    const newTxn = { id: Date.now(), ...txn };
    setTransactions((prev) => [newTxn, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTransaction = (updatedTxn) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedTxn.id ? updatedTxn : t))
    );
  };
  const [goal, setGoal] = useState(0); 
  const [saved, setSaved] = useState(0); 

  const addSavings = (amount) => {
    if (!amount || isNaN(amount)) return;

    const newSaved = saved + Number(amount);
    setSaved(newSaved);

    if (newSaved >= goal && goal > 0) {
      alert("🎉 Goal Achieved!");
    }
  };

  return (
    <FinanceContext.Provider
      value={{
        // Transactions
        transactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,

        // Goals
        goal,
        setGoal,
        saved,
        addSavings,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};