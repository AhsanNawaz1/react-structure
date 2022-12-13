// let BASE_URL = "http://localhost:5000/"
let BASE_URL = "https://node-server-portfolio.herokuapp.com/"

let Endpoints = {
  getUser: BASE_URL + "users/users",
  updateUser: BASE_URL + "users/updateUser",
  addUser: BASE_URL + "users/AddUser",
  // deleteUser: BASE_URL + "users/deleteUser",
  registerUser: BASE_URL + "users/register",
  login: BASE_URL + "users/login",
  update: BASE_URL + "users/update",
  deleteUser: BASE_URL + "users/delete",
  getData: BASE_URL + "users/url",
  createCRUD: BASE_URL + "CRUD/create",
  getCRUD: BASE_URL + "CRUD/getCRUD",
  updateCRUD: BASE_URL + "CRUD/update/",
  deleteCRUD: BASE_URL + "CRUD/delete/",
  createPost: BASE_URL + "blog/create",
  sentEmail: BASE_URL + "portfolio/sentEmail",
  getAbout: BASE_URL + "portfolio/about",
  downloadCV: BASE_URL + "portfolio/downloadCV",
  getProjects: BASE_URL + "portfolio/getProjects",
  getBlogs: BASE_URL + "blog/getPosts",
}

export {
  Endpoints
}