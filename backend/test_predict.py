import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "name": "Rahul",
    "age": 30,
    "income": 60000,
    "loanAmount": 15000,
    "employmentYears": 5,
    "interestRate": 8,
    "previousDefault": 0
}

response = requests.post(url, json=data)

print("Status Code:", response.status_code)
print("Response:", response.json())