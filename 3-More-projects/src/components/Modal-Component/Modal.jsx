export const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal-cont">
          <div
            style={{
              width: "400px",
              margin: "50px auto",
              position: "absolute",
              zIndex: "1000",
              backgroundColor: "black",
              padding: "30px",
              left: "33%",
              top: "100px",
              animation: "modalIn 0.5s",
            }}
          >
            <h1 className="modalHead">Modal Head</h1>
            <p className="modalDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              totam molestias minima praesentium odit illum itaque saepe
              molestiae architecto quos?
            </p>
            <button style={{ marginTop: "30px" }} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
