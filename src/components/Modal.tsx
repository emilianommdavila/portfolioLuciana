import React, { FC } from "react";
import bakcground from "../assets/Png.png";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css"

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <AiOutlineClose
        size={30}
        color="#000"
        onClick={closeModal}
        cursor={"pointer"}
      />
      <div className="container">
        <img src={bakcground} alt="Background" />
      </div>
    </div>
  );
};

export default Modal;
