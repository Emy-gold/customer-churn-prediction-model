import { BrowserRouter, Routes, Route } from "react-router-dom";
import PredictionPage from "./pages/PredictionPage";
import ResultPage from "./pages/ResultPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PredictionPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;