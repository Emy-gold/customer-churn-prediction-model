
import { useState } from "react";

import CustomerForm from "../features/prediction/components/Customer";
import { prediction } from "../features/prediction/services/predictionService";

import { useNavigate } from "react-router-dom";

import type {
  CustomerData,

} from "../features/prediction/types/prediction";

function PredictionPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePrediction = async (customerData: CustomerData) => {
    try {
      setLoading(true);
      setError(null);

      const pred = await prediction(customerData);

      navigate("/result", {
        state: { result: pred },
      });
    } catch (error) {
      console.error("Prediction error:", error);
      setError("Unable to make prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative z-10">
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

    </div>
  );
}

export default PredictionPage;
