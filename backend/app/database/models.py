from datetime import datetime
from app.database import db


# -------------------------
# 👤 USER MODEL
# -------------------------

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), default="loan_officer")


# -------------------------
# 📊 PREDICTION MODEL
# -------------------------

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    applicant_name = db.Column(db.String(100))
    risk_score = db.Column(db.Float)
    decision = db.Column(db.String(100))


# -------------------------
# 🧾 AUDIT LOG MODEL
# -------------------------

class AuditLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_email = db.Column(db.String(120))
    action = db.Column(db.String(200))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)