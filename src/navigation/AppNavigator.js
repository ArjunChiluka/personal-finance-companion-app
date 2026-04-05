// AppNavigator.js
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddTransactionScreen from "../screens/AddTransactionScreen";
import DashboardScreen from "../screens/DashboardScreen";
import EditTransactionScreen from "../screens/EditTransactionScreen";
import GoalsScreen from "../screens/GoalsScreen";
import InsightsScreen from "../screens/InsightsScreen";
import TransactionsScreen from "../screens/TransactionsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ✅ FIXED: Remove header from stack (so no duplicate)
function TransactionStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // ❌ disable stack header
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsScreen}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
      />
      <Stack.Screen
        name="EditTransaction"
        component={EditTransactionScreen}
      />
    </Stack.Navigator>
  );
}

// Bottom Tabs
export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // ✅ Single header for all screens
        headerShown: true,
        headerStyle: { backgroundColor: "#4CAF50" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },

        // Bottom tab styling
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },

        // Icons
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home")
            return <Ionicons name="home" size={size} color={color} />;

          if (route.name === "Transactions")
            return <MaterialCommunityIcons name="currency-inr" size={size} color={color} />;

          if (route.name === "Insights")
            return <Ionicons name="bar-chart" size={size} color={color} />;

          if (route.name === "Goals")
            return <Ionicons name="flag" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Transactions" component={TransactionStack} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Goals" component={GoalsScreen} />
    </Tab.Navigator>
  );
}