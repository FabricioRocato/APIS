import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/spring_crud_rest/api",
});