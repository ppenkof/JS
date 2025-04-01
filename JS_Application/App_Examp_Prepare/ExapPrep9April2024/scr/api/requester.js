import { getToken } from "../utils.js";

async function request(method, url, data) {
  console.log(url);
  const params = {
    method,
    headers: {},
  };

  const token = getToken();

  if (token) {
    params.headers["X-Authorization"] = token;
  }

  if (data) {
    params.headers["Content-Type"] = "application/json";
    params.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, params);

    if (!response.ok || response.status === 400) {
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return response;
    }

    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export const post = (url, data) => request("POST", url, data);
export const get = (url) => request("GET", url);
export const put = (url, data) => request("PUT", url, data);
export const del = (url) => request("DELETE", url);
