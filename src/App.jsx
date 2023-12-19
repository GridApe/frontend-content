import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WaitList } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* PublicRoute */}
        <Route path="/" element={<WaitList />} />
        {/* ProtectedRoute */}
      </Routes>
    </Router>
  );
}

export default App;
