import sqlite3

DB_PATH = "creditai.db"


def get_model_metrics():

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # total applications
    cursor.execute("SELECT COUNT(*) FROM applications")
    total = cursor.fetchone()[0]

    # approved
    cursor.execute("SELECT COUNT(*) FROM applications WHERE decision='Approved'")
    approved = cursor.fetchone()[0]

    # rejected
    cursor.execute("SELECT COUNT(*) FROM applications WHERE decision='Rejected'")
    rejected = cursor.fetchone()[0]

    # average risk score
    cursor.execute("SELECT AVG(risk) FROM applications")
    avg_risk = cursor.fetchone()[0]

    conn.close()

    if total == 0:
        approval_rate = 0
        rejection_rate = 0
    else:
        approval_rate = approved / total
        rejection_rate = rejected / total

    return {
        "total_applications": total,
        "approved": approved,
        "rejected": rejected,
        "approval_rate": approval_rate,
        "rejection_rate": rejection_rate,
        "average_risk": avg_risk
    }