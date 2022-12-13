import React, { useEffect, useState } from 'react';
import Create from "./Create";
import { getAllUsers, updateUser, addUser, deleteUser } from "../services/userService";
import { Spinner } from "react-bootstrap";
import Navigation from "./Navbar";
import { CreateCRUD, getCRUD, updateCRUD, deleteCRUD } from "../services/CRUDservices"

function Listings() {
  const [list, setList] = useState([])
  const [show, setShow] = useState(false);
  const [isEdited, setIsEdited] = useState(false)
  const [selectedRow, setSelectedRow] = useState({});
  const [inx, setInx] = useState(null);


  const closeModal = () => {
    setShow(!show);
    setSelectedRow({});
    setIsEdited(false)
  };

  const setEdit = (event, inx) => {
    setIsEdited(true)
    setInx(inx)
    setShow(true)
    setSelectedRow(event);
  }

  const handleDelete = (event, inx) => {
    const temp = [...list];
    temp.splice(inx, 1)
    setList(temp);


    deleteCRUD(event._id)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {

      })
  }

  const handleCreate = (obj, inx) => {

    if (isEdited) {
      // let temp = [...list];
      // temp[inx] = obj;
      // setList(temp);

      updateCRUD(obj, obj._id)
        .then((data) => {
          getCRUDTable();
        })
        .catch(() => {

        })
    }
    else {
      // let temp = [...list];
      // temp.push(obj);
      // setList(temp);

      CreateCRUD(obj)
        .then(() => {
          getCRUDTable();
        })
        .catch(() => {

        })

    }
  }

  const getCRUDTable = () => {
    getCRUD()
      .then((data) => {
        setList(data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCRUDTable();
  }, [])


  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section mt-5">CRUD</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <button type="button" class="btn btn-info text-white mb-3" onClick={() => setShow(true)}>+ Add</button>
                <table className="table table-striped mb-5">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.length > 0 ? list.map((post, inx) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{inx + 1}</th>
                            <td>{post.Name}</td>
                            <td>{post.Number}</td>
                            <td>{post.Role}</td>
                            <td><button type="button" class="btn btn-success" onClick={() => setEdit(post, inx)}>Edit</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={() => handleDelete(post, inx)}>Delete</button></td>
                          </tr></>
                      )
                    }) : "No Record"}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
        <Create
          show={show}
          handleClose={closeModal}
          selectedRow={selectedRow}
          handleCreate={handleCreate}
          inx={inx}
          edited={isEdited}
        />
      </section>
    </>
  )
}

export default Listings