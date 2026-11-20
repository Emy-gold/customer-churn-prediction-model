import { useLocation, useNavigate } from "react-router-dom";
import type { PredictionResponse } from "../features/prediction/types/prediction";
import PredictionResult from "../features/prediction/components/PredictionResult";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result as PredictionResponse | undefined;

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">
          No prediction result found.
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
        >
          Back to Prediction
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-mesh">
      <PredictionResult result={result} />

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold"
      >
        New Prediction
      </button>
    </div>
  );
}

export default ResultPage;