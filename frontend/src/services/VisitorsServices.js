import axios from "axios";
import API_KEYS from "../constants/api-keys";
const base_url = `${API_KEYS.API_URL}`;

// POST request and header are used because among the data sent 
// to the server are files and data is stored in a FormData object
function saveInvoices(user_id, formData){
  const url = base_url + `/invoice`;
  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const VisitorsServices = {
    saveInvoices
}