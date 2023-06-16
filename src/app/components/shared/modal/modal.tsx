interface ModalProps {
  modalOpen: boolean;
  title: string;
  children?: any;
  closeModal: () => void;
  onSave: () => void;
}

const Modal: React.FC<ModalProps> = ({
  modalOpen,
  closeModal,
  onSave,
  title,
  children,
}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box ">
        <div className="flex justify-between">
          <h3 className="font-extrabold text-xl mb-2">{title}</h3>

          <button onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col">{children}</div>
        <div className="modal-action">
          <button
            className="px-8 py-1 font-bold border rounded border-gray-500 hover:bg-slate-500 hover:text-white"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="text-white font-bold rounded bg-green-500 hover:bg-green-700 px-8 py-1"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
