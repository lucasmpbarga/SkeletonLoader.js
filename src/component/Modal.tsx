import { useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button className="btn mt-4" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      {modalOpen && (
        <dialog id="my_modal_1" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Teste modal!</h3>
            <p className="py-4">
              Uma modal que não tem relação nenhuma com a lista de tasks!
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
