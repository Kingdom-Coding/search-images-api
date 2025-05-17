import "./Modal.css";

export function Modal({ img, setModal }) {
  function onHandleClick() {
    setModal(false);
  }

  return (
    <div
      className="modal-container"
      onClick={() => {
        onHandleClick();
      }}
    >
      <div className="modal">
        <img id="img" src={img.webformatURL} alt="preview of image" />
      </div>
    </div>
  );
}
