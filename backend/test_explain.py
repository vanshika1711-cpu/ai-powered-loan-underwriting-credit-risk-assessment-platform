import requests

url = "http://127.0.0.1:5000/explain"

data = {
    "income":60000,
    "loanAmount":15000,
    "creditHistory":10
}

res = requests.post(url,json=data)

print(res.json())