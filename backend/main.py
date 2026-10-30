from fastapi import FastAPI
from pathlib import Path
from pydantic import BaseModel, Field

import joblib

class CustomerData(BaseModel):
    CreditScore: int = Field(ge=300, le=850)
    Geography: Literal["France","Germany","Spain"]
    Gender: Literal["Female", "Male"]
    Age: int = Field(gt=0)
    Tenure: int = Field(ge=0, le=10)
    Balance: float = Field(ge=0)
    NumOfProducts: int = Field(ge=1, le=4)
    HasCrCard: int = Field(ge=0, le=1)
    IsActiveMember: int = Field(ge=0, le=1)
    EstimatedSalary: float = Field(ge=0)


app = FastAPI(title = "Customer Churn Prediction API")

# Locate the saved model files in the backend folder
BASE_DIR = Path(__file__).resolve().parent

model = joblib.load(BASE_DIR / "churn_model.pkl")
threshold = joblib.load(BASE_DIR / "churn_threshold.pkl")

@app.get("/")
def home():
    return {
        "message": "Customer Churn Prediction API is running",
        "model_loaded" : True,
        "threshold": threshold    
    }