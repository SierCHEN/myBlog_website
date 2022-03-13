import axios from 'axios';
import { API_BASE_URL } from '../config';

// create an axios instance
const service = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true, // send cookies when cross-domain requests
  //timeout: 10000 // request timeout
})

service.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  
  return req;
})

export const fetchBlogs = () => service.get('/posts');
export const createBlog = (newBlog) => service.post('/posts', newBlog);
export const updateBlog = (id, updatedBlog) => service.patch(`/posts/${id}`, updatedBlog);
export const likeBlog = (id) => service.patch(`/posts/${id}/likePost`);
export const deleteBlog = (id) => service.delete(`/posts/${id}`);

export const signIn = (formData) => service.post('/users/signIn', formData);
export const signUp = (formData) => service.post('/users/signUp', formData);


