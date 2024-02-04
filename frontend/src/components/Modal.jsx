import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const translate = document.getElementById("translate");
    translate.classList.add("translate-y-10");

    const timeoutId = setTimeout(() => {
      translate.classList.remove("translate-y-10");
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClick = () => {
    onClose();
  };

  return (
    <div className="modal">
      <button
        type="button"
        className="w-full flexEnd absolute top-[7px] right-[11px] text-white"
        onClick={handleClick}
      >
        <X />
      </button>

      <div
        id="translate"
        className="modal_wrapper transition duration-300 ease-out"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
