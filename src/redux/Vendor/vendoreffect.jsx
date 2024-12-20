// vendorEffects.js
import axios from 'axios';

const authInstance = axios.create({
    baseURL: 'http://154.61.173.102:3006',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});
const accessToken = localStorage.getItem('accessToken');
console.log(accessToken);
const vendorAddEffect = (formData) => {
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: '/vendors/insertvendor',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${accessToken}`,
      },
      data: formData,
    })
    .then(response => {
      console.log(response,"hello1")
      resolve(response);
    })
    .catch(error => {
        console.log(error.response.data.errorFields.contact,"hello")
        console.log(error.response.data,"hello")
      reject(error.response.data.errorFields.email || error.response.data.errorFields.contact || error.response.data)
    });
  });
};

const vendorUpdateEffect = (id, formData) => {
  const token = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: `/vendors/updatevendor/${id}`,
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
      console.log(error,"hello")
      console.log(error.response.data.message ,"hello")
    reject(error.response.data.message || error.response.data.errorFields.email || error.response.data.errorFields.phone || error.response.data)
  });
  });
};

const vendorDeleteEffect = id => {
  const token = localStorage.getItem("accessToken");
  console.log(id)
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: `/vendors/deletevendor/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log(`response`)
      console.log(response)
      resolve(response);
    })
    .catch(error => {
      console.log(error)
      reject(error);
    });
  });
};

const vendorViewEffect = (page) => {
  const token = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: `/vendors/list?pagination_required=true&pagesize=10&pageNo=${page}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
};

const vendorParticularViewEffect = id => {
  const token = localStorage.getItem("accessToken");
  return new Promise((resolve, reject) => {
    authInstance.request({
      url: `/vendors/getvendor?vendor_id=${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    });
  });
};
export {
    vendorAddEffect,
    vendorUpdateEffect,
    vendorDeleteEffect,
    vendorViewEffect,
    vendorParticularViewEffect,
  };
  