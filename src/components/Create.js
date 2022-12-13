import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Create({ show, handleClose, selectedRow, handleCreate, inx, edited }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");


  useEffect(() => {
    if (selectedRow) {
      setName(selectedRow.Name);
      setNumber(selectedRow.Number);
      setRole(selectedRow.Role)
    }
  }, [show])

  const handleChange = (e) => {
    if (e.target.name == "Name") {
      setName(e.target.value);
    }
    else if (e.target.name == "Number") {
      setNumber(e.target.value);
    }
    else {
      setRole(e.target.value);
    }
  }


  const handleSubmit = () => {
    handleClose()
    const obj =
      { Name: name, Number: number, Role: role }
    if (edited) {
      obj['_id'] = selectedRow._id
    }
    handleCreate(obj, inx)
  }


  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className='fw-bold text-center'>{edited ? "Edit the Row" : "Enter New Row in List"}</div>
          <div className='fw-bold'>Name</div>
          <input className='w-100 mb-2 borderInput' name="Name" value={name} onChange={(e) => handleChange(e)} />
          <div className='fw-bold'>Number</div>
          <input className='w-100 mb-2 borderInput' name="Number" value={number} onChange={(e) => handleChange(e)} />
          <div className='fw-bold'>Role</div>
          <input className='w-100 borderInput' name="Role" value={role} onChange={(e) => handleChange(e)} />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" disabled={!(name && number && role)} onClick={() => handleSubmit()}>
            {edited ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Create;