import joblib
import os
import numpy as np
import shap

# Go one level up from app → backend
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, "models", "risk_model_optimized.pkl")
PREPROCESSOR_PATH = os.path.join(BASE_DIR, "models", "preprocessor.pkl")

model = joblib.load(MODEL_PATH)
preprocessor = joblib.load(PREPROCESSOR_PATH)

# SHAP explainer initialize
explainer = shap.TreeExplainer(model)


def make_decision(applicant_data):

    input_data = np.array([list(applicant_data.values())])
    processed = preprocessor.transform(input_data)

    prediction = model.predict(processed)[0]
    probability = model.predict_proba(processed)[0][1]

    decision = "Approved" if prediction == 1 else "Rejected"

    # SHAP explanation
    shap_values = explainer.shap_values(processed)

    feature_importance = {}

    if isinstance(shap_values, list):
        shap_values = shap_values[1]

    for i, feature in enumerate(applicant_data.keys()):
        feature_importance[feature] = float(shap_values[0][i])

    return {
        "decision": decision,
        "risk_score": float(probability),
        "feature_importance": feature_importance
    }