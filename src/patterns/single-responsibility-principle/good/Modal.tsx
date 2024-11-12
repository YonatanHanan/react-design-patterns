import { useState } from "react";

type ModalProps = {
  children: React.ReactNode;
};

// ✅ Single responsibility: managing modals
export function Modal({ children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggleModal}>Open</button>
      {isModalOpen && children}
    </>
  );
}
