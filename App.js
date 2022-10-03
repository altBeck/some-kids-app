import "./App.css";
import "./dashboardmain.scss";

import Dashboard from "./components/pages/Dashboard";
import Navbar from "./components/Navbar";
import { AddCardPage } from "./components/pages/AddCardPage";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Signup from "../src/pages/signup";
import Support from "./pages/support";
import { WalletPage } from "./components/pages/WalletPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/wallet-bal" element={<WalletPage />} />
        <Route path="/add-card" element={<AddCardPage />} />
      </Routes>
    </div>
  );
};

export default App;
