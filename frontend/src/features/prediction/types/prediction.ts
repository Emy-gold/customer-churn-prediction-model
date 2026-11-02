export interface CustomerData {
  CreditScore: number;
  Geography: "France" | "Germany" | "Spain";
  Gender: "Female" | "Male";
  Age: number;
  Tenure: number;
  Balance: number;
  NumOfProducts: number;
  HasCrCard: number;
  IsActiveMember: number;
  EstimatedSalary: number;
}

export interface PredictionResponse {
  churn_probability: number;
  threshold: number;
  prediction: 0 | 1;
  label: string;
}