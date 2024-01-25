import axios from "axios";

const url = "http://localhost:5000/api/post";

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
