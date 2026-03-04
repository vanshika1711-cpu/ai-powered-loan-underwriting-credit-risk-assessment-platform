import axios from "axios";

const API = "https://ai-powered-loan-underwriting-credit-risk-3at2.onrender.com/";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API}/login`, {
    email,
    password,
  });

  return response.data;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const response = await axios.post(`${API}/register`, {
    name,
    email,
    password,
    role,
  });

  return response.data;
};