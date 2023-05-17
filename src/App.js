import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import CarListPage from "./pages/carList";
import CarDetailPage from "./pages/carDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/carList" element={<CarListPage />} />
        <Route path="/carList/:id" element={<CarDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
