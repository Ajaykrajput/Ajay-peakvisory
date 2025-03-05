import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import Accounting from "./screens/Accounting";
import BankingScreen from "./screens/BankingScreen";
import ReportsScreen from "./screens/ReportsScreen";
import ContactsScreen from "./screens/ContactsScreen";
import InvoicingScreen from "./screens/InvoicingScreen";
import QueriesScreen from "./screens/QueriesScreen";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-row w-screen h-screen overflow-hidden bg-[#F5F5FA]">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Accounting />} />
            <Route path="/banking" element={<BankingScreen />}></Route>
            <Route path="/reports" element={<ReportsScreen />} />
            <Route path="/contacts" element={<ContactsScreen />} />
            <Route path="/invocing" element={<InvoicingScreen />} />
            <Route path="/queries" element={<QueriesScreen />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "2rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
