from fastapi import FastAPI
from pathlib import Path

import joblib

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