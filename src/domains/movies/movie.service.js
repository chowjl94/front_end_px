import { fetchJson } from "lib/fetch-json";
import { BASE_URL } from "const";

export const postComment = ({data, token}) =>
  fetchJson(`${BASE_URL}/movie/comment`, {
    method: "POST",
    body: {
      ...data
        },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteComment = ({ id, token }) =>
  fetchJson(`${BASE_URL}/movie/comment/${id}`, {
    method : "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const getMovies = ({ page = 0, limit = 10 } = {}) =>
  fetchJson(`${BASE_URL}/movie?${({ page, limit })}`, {
    method: 'GET',
  });

export const getSingle = ({id}) =>
  fetchJson(`${BASE_URL}/movie/movie/${id}`, {
    method: 'GET',
  });


export const getSingleComment =({id})=>
fetchJson(`${BASE_URL}/movie/movie/${id}/comment`, {
  method: 'GET',
});
