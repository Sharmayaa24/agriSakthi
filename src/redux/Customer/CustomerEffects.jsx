import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://154.61.173.102:3006",
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

const accessToken = localStorage.getItem("accessToken");
console.log(accessToken);

export const customerAddEffect = (formData) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: "/customers/insertcustomer",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorFields.contact, "hello");
        console.log(error.response.data, "hello");
        reject(
          error.response.data.errorFields.email ||
            error.response.data.errorFields.contact ||
            error.response.data
        );
      });
  });
};
export const customerUpdateEffect = (id,formData) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/updatecustomer/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
        data: formData,
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorFields.contact, "hello");
        console.log(error.response.data, "hello");
        reject(
          error.response.data.errorFields.email ||
            error.response.data.errorFields.contact ||
            error.response.data
        );
      });
  });
};

export const customerDeleteEffect = (id) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/deletecustomer/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorFields.contact, "hello");
        console.log(error.Authorization);
        reject(error);
      });
  });
};

export const customerGetEffect = (id) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/getcustomer/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorFields.contact, "hello");
        console.log(error.Authorization);
        reject(error);
      });
  });
};

export const customerViewAllEffect = ({ payload }) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/viewallcustomers/${payload}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.errorFields.contact, "hello");
        reject(error);
      });
  });
};
