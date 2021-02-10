import { create } from 'apisauce';


const apiClient = create({
  baseURL: 'http://192.168.50.152:8000/api'
});

export default apiClient;