from fastapi import APIRouter
from schemas.customer import CustomerData
from services.prediction_service import predict_churn
from schemas.perdiction import PerdictionResponse
from fastapi import APIRouter, HTTPException
router = APIRouter()

@router.post("/predict", response_model=PerdictionResponse)
def predict(customer: CustomerData):
    try:
        customer_data = customer.model_dump()
        result = predict_churn(customer_data)
        return result
    except Exception:
        raise HTTPException(
            status_code=500,
            deatil="An error occurred while making the prediction"
        )