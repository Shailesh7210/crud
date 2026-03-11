import axios from "axios";

export const BookbaseUrl = axios.create({
  baseURL: "http://localhost:3080/book"
});