
import axios from 'axios';
import { handleApiError } from "../Vendor/vendoreffect";

const authInstance = axios.create({
    baseURL: 'http://154.61.173.102:3006',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});

const transactionAddEffect = (formData) => {
  console.log(formData)
    const token = localStorage.getItem("accessToken");
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/sales/addsale`,
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        console.log(response)
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
  const transactionUpdateEffect = (id, formData) => {
    const token = localStorage.getItem("accessToken");
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/vendors/convertToTransaction/${id}`,
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
  const transactionViewEffect = () => {
    const token = localStorage.getItem("accessToken");
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/vendors/convertToTransaction`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
  const transactionParticularViewEffect = (id) => {
    console.log(id);

    const token = localStorage.getItem("accessToken");
    console.log(token);
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/transactions/gettransactionbyvendor?vendor_id=${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
    
  const CustomerTransactionParticularViewEffect = (id) => {
    console.log(id);
    const token = localStorage.getItem("accessToken");
    console.log(token);
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/transactions/gettransactionbyvendor?vendor_id=${id}`,
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
  const transactionDeleteEffect = (id) => {
    const token = localStorage.getItem("accessToken");
    return new Promise((resolve, reject) => {
      authInstance.request({
        url: `/vendors/convertToTransaction/${id}`,
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleApiError(error))
      });
    });
  };
  
  export {
    transactionAddEffect,
    transactionUpdateEffect,
    transactionDeleteEffect,
    transactionViewEffect,
    transactionParticularViewEffect,
    CustomerTransactionParticularViewEffect
  }