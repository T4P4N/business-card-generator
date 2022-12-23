function Modal({ setIsOpen, content }) {
  return (
    <div>
      {content}
      <button
        className="mt-2 p-5 outline outline-1
                outline-slate-400 text-slate-500
                rounded hover:cursor-pointer font-paul"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Close
      </button>
    </div>
  );
}

export default Modal;
