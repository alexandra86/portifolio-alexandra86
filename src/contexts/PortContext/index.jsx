import { createContext, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

export const PortContext = createContext({});

export function PortProvider({ children }) {
  const [aboutMeModalIsOpen, setAboutMeIsOpen] = useState(false);
  const [contactModalIsOpen, setContactIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleAboutMeModal() {
    setAboutMeIsOpen(!aboutMeModalIsOpen);
  }

  function handleContactModal() {
    setContactIsOpen(!contactModalIsOpen);
  }

  return (
    <PortContext.Provider
      value={{
        aboutMeModalIsOpen,
        contactModalIsOpen,
        setAboutMeIsOpen,
        setContactIsOpen,
        loading,
        setLoading,
        handleAboutMeModal,
        handleContactModal,
      }}
    >
      {children}
    </PortContext.Provider>
  );
}
