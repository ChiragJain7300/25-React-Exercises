import { useState } from "react";
import { Modal } from "./Modal";
import "./modal.css";
export const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
