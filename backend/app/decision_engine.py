import joblib
import os
import numpy as np

# Go one level up from app → backend
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, "models", "risk_model_optimized.pkl")
PREPROCESSOR_PATH = os.path.join(BASE_DIR, "models", "preprocessor.pkl")

model = joblib.load(MODEL_PATH)
preprocessor = joblib.load(PREPROCESSOR_PATH)


def make_decision(applicant_data):
    input_data = np.array([list(applicant_data.values())])
    processed = preprocessor.transform(input_data)

    prediction = model.predict(processed)[0]
    probability = model.predict_proba(processed)[0][1]

    decision = "Approved" if prediction == 1 else "Rejected"

    return {
        "decision": decision,
        "risk_score": float(probability)
    }