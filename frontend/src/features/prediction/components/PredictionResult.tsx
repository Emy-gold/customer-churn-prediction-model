
import type { PredictionResponse } from "../types/prediction";

interface PredictionResultProps {
  result: PredictionResponse;
}

function PredictionResult({ result }: PredictionResultProps) {
  const isChurn = result.prediction === 1;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-6 rounded-2xl bg-slate-900/70 border border-cyan-400/20 shadow-xl shadow-cyan-500/10">

      <h2 className="text-2xl font-bold text-white mb-6">
        Prediction Result
      </h2>

      <div className="text-center">
        <p className="text-slate-400 mb-2">
          Customer Status
        </p>

        <h3 className={`text-3xl font-bold ${
          isChurn ? "text-red-400" : "text-green-400"
        }`}>
          {result.label}
        </h3>

        <p className="text-slate-300 mt-6">
          Churn Probability
        </p>

        <p className="text-4xl font-bold text-cyan-400 mt-2">
          {(result.churn_probability * 100).toFixed(2)}%
        </p>

        <p className="text-sm text-slate-500 mt-3">
          Decision Threshold: {(result.threshold * 100).toFixed(0)}%
        </p>
      </div>
    </div>
  );
}

export default PredictionResult;
