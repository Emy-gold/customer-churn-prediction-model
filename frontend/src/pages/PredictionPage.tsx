
import { useState } from "react";

import CustomerForm from "../features/prediction/components/Customer";
import { prediction } from "../features/prediction/services/predictionService";
import PredictionResult from "../features/prediction/components/PredictionResult";

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
    <div className="min-h-screen w-full bg-mesh">
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
        <PredictionResult result={result} />
      )}
    </div>
  );
}

export default PredictionPage;
