import requests

url = "http://127.0.0.1:5000/register"

data = {
    "email": "admin@gmail.com",
    "password": "123",
    "role": "admin"
}

response = requests.post(url, json=data)

print(response.json())
