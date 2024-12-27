import axios from 'axios';

interface LoginData {
    email: string;
    password: string;
  }
  
  interface SignupData {
    email: string;
    name: string;
    password: string;
  }

const API_URL = 'http://localhost:8080/user';

export const login = async (data: LoginData) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
}

export const register = async (data: SignupData) => {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
}