import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateFolderUser } from "../../redux/actionCreators/filefoldersActionCreators";

const EditFolder = ({ folderToEdit, show, handleClose }) => {
  const [folderName, setFolderName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (folderToEdit) {
      setFolderName(folderToEdit.data.name);
    }
  }, [folderToEdit]);

  const handleFolderSubmit = (e) => {
    e.preventDefault();

    if (!folderName) return toast.dark("Please enter folder name!");

    dispatch(updateFolderUser(folderToEdit.docId, folderName));
    toast.dark("Folder updated successfully!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit Folder</Modal.Title>
        <Button
          variant="white"
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFolderSubmit}>
          <Form.Group controlId="formBasicFolderName" className="my-2">
            <Form.Control
              type="text"
              placeholder="Enter folder name..."
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicFolderSubmit" className="mt-5">
            <Button type="submit" className="form-control" variant="primary">
              Update Folder
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditFolder;
