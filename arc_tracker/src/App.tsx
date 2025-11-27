import React from "react";
import {
  AppShell,
  Header,
  Navbar,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  const theme = useMantineTheme();

  return (
    <div className="app-shell">
      <AppHeader />
      <Sidebar />
      <main className="main">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Dashboard />
        </motion.div>
      </main>
    </div>
  );
}
