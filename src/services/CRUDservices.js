import { Endpoints } from "./endpoints";
import axios from "axios";

const CreateCRUD = (obj) => {
  return axios.post(Endpoints.createCRUD, obj);
}

const getCRUD = () => {
  return axios.get(Endpoints.getCRUD);
}

const updateCRUD = (obj, id) => {
  return axios.post(Endpoints.updateCRUD + id, obj);
}

const deleteCRUD = (id) => {
  return axios.delete(Endpoints.deleteCRUD + id);
}


export { CreateCRUD, getCRUD, updateCRUD, deleteCRUD };