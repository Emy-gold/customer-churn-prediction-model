import api from "../../../services/api";
import  type { CustomerData, PredictionResponse } from "../types/prediction";

export const prediction = async (
    customerData : CustomerData
): Promise<PredictionResponse> => {
    const response = await api.post<PredictionResponse>("/predict", customerData);

    return response.data;
}
