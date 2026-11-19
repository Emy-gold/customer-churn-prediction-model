
import { useState } from "react";

import CustomerForm from "../features/prediction/components/Customer";
import { prediction } from "../features/prediction/services/predictionService";

import type {
  CustomerData,
  PredictionResponse,
} from "../features/prediction/types/prediction";

function PredictionPage() {
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = async (customerData: CustomerData) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const pred = await prediction(customerData);

      setResult(pred);
    } catch (error) {
      console.error("Prediction error:", error);
      setError("Unable to make prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg">
      <CustomerForm onSubmit={handlePrediction} />

      {loading && (
        <p className="text-center text-cyan-400 mt-6">
          Analyzing customer data...
        </p>
      )}

      {error && (
        <p className="text-center text-red-400 mt-6">
          {error}
        </p>
      )}

      {result && (
        <div className="text-center mt-8 text-white">
          <h2 className="text-2xl font-bold">
            Prediction Result
          </h2>

          <p className="mt-3">
            {result.label}
          </p>

          <p>
            Churn Probability:{" "}
            {(result.churn_probability * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}

export default PredictionPage;
