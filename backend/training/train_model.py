import pandas as pd
import numpy as np
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, roc_auc_score, confusion_matrix
import joblib
import os

# Load Dataset

current_dir = os.path.dirname(__file__)
file_path = os.path.join(current_dir, "credit_risk_dataset.csv")

df = pd.read_csv(file_path)
print("Dataset Loaded")
print("Shape:", df.shape)
print(df["loan_status"].value_counts())


# Handle Missing Values


df.fillna(df.median(numeric_only=True), inplace=True)


# Feature Engineering

df["loan_to_income_ratio"] = df["loan_amnt"] / df["person_income"]
df["interest_income_ratio"] = df["loan_int_rate"] / df["person_income"]


# Encode Categorical Columns

categorical_cols = df.select_dtypes(include=["object", "string"]).columns
df = pd.get_dummies(df, columns=categorical_cols, drop_first=True)


# Features & Target

X = df.drop("loan_status", axis=1)
y = df["loan_status"]


# Train-Test Split

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42,
    stratify=y
)


# Class Weight for Imbalance

scale_pos_weight = y_train.value_counts()[0] / y_train.value_counts()[1] * 1.1  


# Train Optimized XGBoost

model = XGBClassifier(
    n_estimators=700,
    max_depth=5,
    learning_rate=0.015,
    subsample=1.0,
    colsample_bytree=0.8,
    gamma=0,
    min_child_weight=1,
    reg_alpha=0.3,
    reg_lambda=1.2,
    scale_pos_weight=scale_pos_weight,
    random_state=42,
    eval_metric="logloss",
   
)

model.fit(X_train, y_train)
print("Model Training Complete")




y_prob = model.predict_proba(X_test)[:, 1]
threshold = 0.40  
y_pred = (y_prob > threshold).astype(int)


# Evaluation

print("Accuracy:", round(accuracy_score(y_test, y_pred), 4))
print("ROC-AUC:", round(roc_auc_score(y_test, y_prob), 4))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:\n", cm)

# Save Model

models_dir = os.path.join(os.path.dirname(current_dir), "models")
os.makedirs(models_dir, exist_ok=True)

model_path = os.path.join(models_dir, "risk_model_optimized.pkl")
joblib.dump(model, model_path)
print("Optimized model saved successfully at:", model_path)