from pathlib import Path
import joblib
import pandas as pd

BASE_DIR = Path(__file__).resolve().parent.parent

pipeline = joblib.load(BASE_DIR / "models" / "churn_model.pkl")
threshold = joblib.load(BASE_DIR / "models" / "churn_threshold.pkl")


def predict_churn(customer_data: dict):
    customer_df = pd.DataFrame([customer_data])

    probability = float(pipeline.predict_proba(customer_df)[0][1])

    prediction = int(probability >= threshold)

    return {
        "churn_probability": round(probability, 4),
        "threshold": threshold,
        "prediction": prediction,
        "label": "Likely to churn" if prediction == 1 else "Likely to stay"
    }