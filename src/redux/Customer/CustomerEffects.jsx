import axios from "axios";
  import { handleApiError } from "../Vendor/vendoreffect";

const authInstance = axios.create({
  baseURL: "http://154.61.173.102:3006",
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

const accessToken = localStorage.getItem("accessToken");

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
        console.log(error);
        const errorFields = handleApiError(error);
        console.log(errorFields)
        reject(errorFields);
      });
  });
};
export const customerUpdateEffect = (id,formData) => {
  console.log(id,formData,"effect")
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/updatecustomer/${id}`,
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
       
      })
      .then((response) => {
        console.log(response, "hello1");
        resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data, "hello");
        reject(
          handleApiError(error)
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
        console.log(error.Authorization);
        reject(error);
      });
  });
};

export const customerGetEffect = id => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/getcustomer?customer_id=${id}`,
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
        console.log(error);
        reject(handleApiError(error));
      });
  });
};

export const customerViewAllEffect = ( page ) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/customers/list?pagination_required=true&pagesize=10&pageNo=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
