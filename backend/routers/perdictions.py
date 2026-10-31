from fastapi import APIRouter
from schemas.customer import CustomerData
from services.prediction_service import predict_churn
from schemas.perdiction import PerdictionResponse

router = APIRouter()

@router.post("/predict", response_model=PerdictionResponse)
def predict(customer: CustomerData):
    customer_data = customer.model_dump()
    result = predict_churn(customer_data)
    return result