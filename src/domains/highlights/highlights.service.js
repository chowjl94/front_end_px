import { fetchJson } from "lib/fetch-json";
import { BASE_URL2 } from "const";

export const getHighlights = () =>
  fetchJson(`${BASE_URL2}`, {
    method: 'GET',
  });


export const getHighLightDetails = (signal) =>
  fetchJson(`${BASE_URL2}`, { signal });


