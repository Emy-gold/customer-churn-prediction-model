from pydantic import BaseModel, Field

class PerdictionResponse(BaseModel):
    churn_probability: float = Field(ge=0, le=1)
    threshold: float = Field(ge=0, le=1)
    prediction: int = Field(ge=0, le=1)
    label: str