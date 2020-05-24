import axios from "axios";
import store from "../store";

axios.defaults.baseURL = "http://localhost:7001/"; //'http://192.168.1.6:8080';
axios.defaults.timeout = 20000;
axios.interceptors.request.use(
  config => {
    config.headers.Authorization = "Bearer " + store.state.token;
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
export const apiLogin = params => {
  return axios.post(`/login`, params).then(res => res);
};
export const apiGetTopics = params => {
  return axios.get(`/topic`, { params }).then(res => res);
};
export const apiAddQuestion = params => {
  return axios.post(`/question`, params).then(res => res);
};
export const apiGetQuestion = params => {
  return axios.get(`/question/${params.id}`, {}).then(res => res);
};
export const apiGetQuestionRecommanded = (params) => {
  return axios.get(`/question`, {params}).then(res => res);
};
export const apiGetQuestionAnswers = params => {
  return axios.get(`/question/${params.id}/answer`, {params}).then(res => res);
};
export const apiVote = params => {
  return axios.post(`/vote`, params).then(res => res);
};
export const apiLike = params => {
  return axios.post(`/like`, params).then(res => res);
};
