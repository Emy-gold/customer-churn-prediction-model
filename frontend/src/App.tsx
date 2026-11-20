import { BrowserRouter, Routes, Route } from "react-router-dom";
import PredictionPage from "./pages/PredictionPage";
import ResultPage from "./pages/ResultPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="animated-bg min-h-screen w-full relative overflow-hidden">
        <div className="particles">
          {Array.from({ length: 35 }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 15}s`,
              }}
            />
            ))}
          </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<PredictionPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;