def explain_decision(applicant_data):

    try:
        income = float(applicant_data.get("income", 0))
        loan = float(applicant_data.get("loanAmount", 0))
        credit = float(applicant_data.get("creditHistory", 0))
    except:
        return {
            "reasons": ["Invalid input data"]
        }

    reasons = []

    # Credit history check
    if credit < 5:
        reasons.append("Short credit history increases loan risk")
    elif credit >= 10:
        reasons.append("Strong credit history improves loan eligibility")

    # Loan vs income
    if income > 0 and loan > income:
        reasons.append("Loan amount exceeds income which increases risk")

    # Income strength
    if income > 50000:
        reasons.append("Higher income improves repayment ability")

    # Default fallback
    if len(reasons) == 0:
        reasons.append("Applicant financial profile appears balanced")

    return {
        "reasons": reasons
    }