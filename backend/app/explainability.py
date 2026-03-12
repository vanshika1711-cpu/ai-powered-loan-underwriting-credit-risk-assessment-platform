def explain_decision(applicant_data):

    try:
        income = float(applicant_data.get("income", 0))
        loan = float(applicant_data.get("loanAmount", 0))
        credit = float(applicant_data.get("creditHistory", 0))
        age = float(applicant_data.get("age", 0))
    except:
        return {
            "reasons": ["Invalid input data"],
            "feature_importance": {}
        }

    reasons = []

    # -------------------------
    # Reason generation
    # -------------------------

    if credit < 5:
        reasons.append("Short credit history increases loan risk")

    elif credit >= 10:
        reasons.append("Strong credit history improves loan eligibility")

    if income > 50000:
        reasons.append("Higher income improves repayment ability")

    if income > 0 and loan > income:
        reasons.append("Loan amount exceeds income which increases risk")

    if len(reasons) == 0:
        reasons.append("Applicant financial profile appears balanced")

    # -------------------------
    # Feature importance
    # -------------------------

    feature_importance = {
        "income_impact": round(income / (income + loan + 1), 2),
        "loan_amount_impact": round(loan / (income + loan + 1), 2),
        "credit_history_impact": round(credit / 20, 2),
        "age_impact": round(age / 100, 2)
    }

    return {
        "reasons": reasons,
        "feature_importance": feature_importance
    }