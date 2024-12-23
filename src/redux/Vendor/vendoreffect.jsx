// vendorEffects.js
import axios from 'axios';

const authInstance = axios.create({
    baseURL: 'http://154.61.173.102:3006',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});
const accessToken = localStorage.getItem('accessToken');
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
      resolve(response);
    })
    .catch(error => {
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
    reject(handleApiError(error))
  });
  });
};

export const handleApiError = (error) => {
  console.log("Full Error Object:", error); 

  if (error.response) {
    const errorData = error.response.data || {};
    const errorFields = errorData.errorFields || {};
    return {
      statusCode: error.response.status,
      email: errorFields.email || null,
      phone: errorFields.phone || null,
      contact: errorFields.contact || null,
      additionalErrors: errorFields,
      message: errorData.message || "Unknown error occurred.",
    };
  } else if (error.request) {
    console.log("Request without response:", error.request); 

    return {
      statusCode: null,
      message: "No response received from the server. Please try again later.",
    };
  } else {
    console.log("Unexpected error:", error);

    return {
      statusCode: null,
      message: error.message || "An unexpected error occurred.",
    };
  }
};

const vendorDeleteEffect = id => {
  const token = localStorage.getItem("accessToken");
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
      resolve(response);
    })
    .catch(error => {
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
  
  
  

  