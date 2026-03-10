import requests

BASE_URL = "http://127.0.0.1:5000"


def test_home():
    response = requests.get(BASE_URL)
    assert response.status_code == 200


def test_predict():

    payload = {
        "name": "Test User",
        "age": 30,
        "income": 60000,
        "loanAmount": 20000,
        "creditHistory": 10
    }

    response = requests.post(
        f"{BASE_URL}/predict",
        json=payload
    )

    assert response.status_code == 200

    data = response.json()

    assert "decision" in data
    assert "risk_score" in data