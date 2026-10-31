from fastapi import FastAPI
from routers.perdictions import router as perdictions_router

app = FastAPI(title = "Customer Churn Prediction API")

@app.get("/")
def home():
    return {
        "message": "Customer Churn Prediction API is running",
    }

app.include_router(perdictions_router)