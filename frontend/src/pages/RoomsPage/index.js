import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Label from "../../components/Form/Label";
import TextField from "../../components/Form/TextField";
import Modal from "../../components/Modal/Modal";

export default function RoomsPage() {
  const navigate = useNavigate();

  const [newRoomData, setNewRoomData] = useState({ link: null, title: null });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTextFieldChange = (event) => {
    const { name, value } = event.target;
    setNewRoomData({ ...newRoomData, [name]: value });
  };

  const handleCreateRoom = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/rooms/",
      data: newRoomData,
      withCredentials: true,
    }).then((response) => {
      navigate(`${response.data}`);
    });
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Modal.Header title={"Create a new room!"} onClose={handleCloseModal} />
        <Modal.Body>
          <Label>Room Title</Label>
          <TextField
            name='title'
            placeholder='Enter your room title'
            onChange={(e) => {
              handleTextFieldChange(e);
            }}
          />
          <Label>Your Live YouTube Stream Link</Label>
          <TextField
            name='link'
            placeholder='Enter live YouTube stream link'
            onChange={(e) => {
              handleTextFieldChange(e);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCreateRoom}>Create room</Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleOpenModal}>Create a new Room!</Button>;
    </>
  );
}
