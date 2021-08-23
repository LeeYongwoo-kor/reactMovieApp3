import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

export const pricesApi = {
  tickersAll: () => api.get("tickers"),
};

export const exchangesApi = {
  exchangesList: () => api.get("exchanges"),
};

export const coinsApi = {
  coinsList: () => api.get("coins"),
  getCoinId: (id) => api.get(`coins/${id}`),
};
