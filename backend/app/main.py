from flask import Flask, request, jsonify
from decision_engine import make_decision
from explainability import explain_decision
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) 

@app.route("/", methods=["GET"])
def home():
    return "Loan Underwriting API is running! Use /predict or /explain ."

@app.route("/predict", methods=["POST"])
def predict():
    applicant = request.json
    result = make_decision(applicant)
    return jsonify(result)

@app.route("/explain", methods=["POST"])
def explain():
    applicant = request.json
    explanation = explain_decision(applicant)
    return jsonify(explanation)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)