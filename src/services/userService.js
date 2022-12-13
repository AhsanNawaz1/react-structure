import { Endpoints } from "./endpoints";
import axios from "axios";

const registerUser = (obj) => {
  return axios.post(Endpoints.registerUser, obj);
}

const loginService = (obj) => {
  return axios.post(Endpoints.login, obj);
}

const updateService = (obj, id) => {
  return axios.post(Endpoints.update + "/" + id, obj);
}

const deleteService = (id) => {
  return axios.delete(Endpoints.deleteUser + "/" + id);
}

const getURLServices = (obj) => {
  return axios.post(Endpoints.getData, obj);
}

const getAllUsers = () => {
  return axios.get(Endpoints.getUser);
};

const updateUser = (obj, id) => {
  console.log("id", id)
  return axios.post(Endpoints.updateUser + "/" + id, obj);
}
const addUser = (obj) => {
  return axios.post(Endpoints.addUser, obj)
}

const deleteUser = (id) => {
  return axios.delete(Endpoints.deleteUser + "/" + id)
}

export { getAllUsers, updateUser, addUser, deleteUser, registerUser, loginService, updateService, deleteService, getURLServices };