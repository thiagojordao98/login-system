import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  validadeToken: async (token: string) => {
    const response = await api.post('/validade', {token});
    return response.data;
  },
  signin: async (email: string, password: string) => {
    return {
      user: { id:3, name: 'Jose', email:'jose@gmail.com'},
      token: '123456'
    };
    const response = await api.post('/signin', {email, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/logout');
    return response.data;
  }
});