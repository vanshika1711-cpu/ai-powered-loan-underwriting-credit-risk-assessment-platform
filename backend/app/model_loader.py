import os
import joblib

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "risk_model_optimized.pkl")

def load_model():
    model = joblib.load(MODEL_PATH)
    return model