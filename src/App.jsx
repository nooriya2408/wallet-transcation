import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QR from "./pages/QR";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <><Routes>

        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/qr" element={<QR />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
