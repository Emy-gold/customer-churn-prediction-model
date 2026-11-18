import { useState } from "react";

import { predictChurn } from "../prediction/services/predictionService";
import type {
  CustomerData,
  PredictionResponse,
} from "../prediction/types/prediction";
const [result, setResult] = useState<PredictionResponse | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);