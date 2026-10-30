from fastapi import APIRouter
from schemas.customer import CustomerData

router = APIRouter()

@router.post("/predict")
def predict(customer: CustomerData):
    pass