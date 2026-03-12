import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "name": "Rahul",
    "age": 30,
    "income": 60000,
    "loanAmount": 15000,
    "creditHistory": 10
}

response = requests.post(url, json=data)

print(response.json())