# 💰 Personal Finance Companion App

A mobile application built using React Native and Expo that helps users track daily financial activities, understand spending habits, and manage simple savings goals.

---

## 📱 Overview

This app is designed as a lightweight personal finance companion (not a banking app). It allows users to record transactions, analyze spending patterns, and stay motivated through goal tracking.

The focus of this project is on clean UI, smooth user experience, and well-structured mobile app architecture.

---

## 🚀 Features

### 🏠 Home Dashboard

* Displays current balance, total income, and total expenses
* Visual representation of spending (income vs expense chart)
* Clean card-based layout for quick understanding

### 💸 Transactions

* Add, edit, and delete transactions
* View transaction history
* Search and filter transactions
* Smooth navigation using Stack Navigator

### 📊 Insights

* Total expenses overview
* Category-wise spending breakdown
* Weekly comparison of spending

### 🎯 Goals (Savings Feature)

* Set a monthly savings goal
* Add savings incrementally
* Track saved amount
* Alert when goal is achieved

---

## 🧠 Product Thinking

The app focuses on:

* Simplicity and clarity
* Everyday usability
* Minimal but meaningful features
* Smooth navigation and feedback

It is designed to help users quickly understand their financial habits without unnecessary complexity.

---

## 🛠 Tech Stack

* React Native
* Expo
* JavaScript
* React Navigation (Stack + Bottom Tabs)
* Context API (State Management)
* AsyncStorage (Local Data Persistence)
* Expo Vector Icons

---

## 📂 Project Structure

/components
/context
/constants
/screens
/navigation
/storage
App.js

---

## 🔄 Data Handling

* Transactions are stored using AsyncStorage
* Global state is managed using Context API
* Data persists even after app reload

---

## 📱 User Flow

1. User opens app → Dashboard is displayed
2. User navigates to Transactions → adds/edits/deletes entries
3. Data updates are reflected in Dashboard and Insights
4. User sets savings goals → tracks progress

---

## ⚙️ Installation & Setup

```bash
1. Clone the repository
   git clone <your-repo-link>

2. Navigate to project folder
   cd FinanceApp

3. Install dependencies
   npm install

4. Start the app
   npx expo start

5. Scan QR code using Expo Go (Android/iOS)
```

---

## 📌 Assumptions

* This is a standalone finance tracker (no bank integration)
* Data is stored locally (no backend)
* Currency is INR (₹)
* Users manually enter transactions

---

## ✨ Future Improvements

* Dark mode support
* Notifications and reminders
* Budget tracking feature
* Data export functionality
* Animated charts and transitions

---

## 📷 Demo

(Add screenshots or demo video link here)

---

## 🚀 Outcome

This project demonstrates the ability to design and build a complete mobile application with real-world features, clean architecture, and a user-friendly experience.

## 👤 Author

Arjun Chiluka
