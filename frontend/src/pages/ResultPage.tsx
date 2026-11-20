import { useLocation, useNavigate } from "react-router-dom";
import type { PredictionResponse } from "../features/prediction/types/prediction";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result as PredictionResponse | undefined;
  const probability = result?.churn_probability ?? 0;

  const riskLevel =
    probability < 0.30
      ? "Low Risk"
      : probability < 0.60
      ? "Medium Risk"
      : "High Risk";

  const riskColor =
  probability < 0.30
    ? "#34d399"
    : probability < 0.60
    ? "#fbbf24"
    : "#f87171";

  const gaugeStyle = {
    background: `conic-gradient(
      ${riskColor} ${probability * 360}deg,
      rgba(148, 163, 184, 0.15) ${probability * 360}deg
    )`,
  };

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
    <div className="w-full max-w-3xl mx-auto mt-8 p-8 rounded-2xl bg-slate-900/70 border border-cyan-400/20 shadow-xl shadow-cyan-500/10">

      <h1 className="text-3xl font-bold text-white text-center mb-8">
        Churn Prediction Results
      </h1>

      <div className="flex flex-col items-center">

        <div
          className="w-48 h-48 rounded-full flex items-center justify-center"
          style={gaugeStyle}
        >
          <div className="w-40 h-40 rounded-full bg-slate-900 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {(probability * 100).toFixed(1)}%
            </span>

            <span className="text-sm text-slate-400">
              Churn Probability
            </span>
          </div>
        </div>

      </div>

      <div className="text-center mt-8">
        <h2
          className="text-2xl font-bold"
          style={{ color: riskColor }}
        >
          {riskLevel}
        </h2>
      </div>

    </div>
  );
}

export default ResultPage;