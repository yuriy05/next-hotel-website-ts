"use client";

import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ModalContext = createContext<any>(undefined);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider
      value={{
        close,
        open,
        openName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: opensWindowName,
}: {
  children: ReactNode;
  opens: string;
}) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  const { close, openName } = useContext(ModalContext);

  const ref = useClickOutside(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-500">
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-950 rounded-lg shadow-lg py-12 px-16 transition-all duration-500"
        ref={ref}
      >
        <button
          className="absolute top-4 right-5 transition-all duration-200 translate-x-3 hover:scale-150"
          onClick={close}
        >
          <XMarkIcon height={25} width={25} />
        </button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
