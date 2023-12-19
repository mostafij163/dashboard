import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_KEY } from "./config";

export function useAaplStockData() {
  return useQuery({
    queryKey: ["aapl-stock"],
    queryFn: function () {
      return axios.get(
        `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/month/2023-01-09/2023-05-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
      );
    },
    retry: 0,
  });
}

export function useGooglStockData() {
  return useQuery({
    queryKey: ["googl-stock"],
    queryFn: function () {
      return axios.get(
        `https://api.polygon.io/v2/aggs/ticker/GOOGL/range/1/month/2023-01-09/2023-05-09?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
      );
    },
    retry: 0,
  });
}
