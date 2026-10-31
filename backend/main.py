from fastapi import FastAPI
from routers.perdictions import router as perdictions_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title = "Customer Churn Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Customer Churn Prediction API is running",
    }

app.include_router(perdictions_router)