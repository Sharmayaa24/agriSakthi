import axios from "axios";
import { handleApiError } from "../Vendor/vendoreffect";

const authInstance = axios.create({
  baseURL: "http://154.61.173.102:3006",
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

const accessToken = localStorage.getItem("accessToken");

export const walletAddEffect = (formData) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: "/wallets/insertwallet",
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

export const walletUpdateEffect = (id, formData) => {
  console.log(id, formData, "effect")
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/wallets/updatewallet/${id}`,
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

export const walletDeleteEffect = (id) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/wallets/deletewallet/${id}`,
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

export const walletGetEffect = id => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/wallets/getwallet?wallet_id=${id}`,
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

export const walletViewAllEffect = (page) => {
  return new Promise((resolve, reject) => {
    authInstance
      .request({
        url: `/wallets/list?pagination_required=true&pageNo=1&pagesize=${page}`,
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