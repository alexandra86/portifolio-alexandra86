import { createContext, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

export const PortContext = createContext({});

export function PortProvider({ children }) {
  const [aboutMeModalIsOpen, setAboutMeIsOpen] = useState(false);
  const [contactModalIsOpen, setContactIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function HandleAboutMeModal() {
    setAboutMeIsOpen(!aboutMeModalIsOpen);
  }

  function HandleContactModal() {
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
        HandleAboutMeModal,
        HandleContactModal,
      }}
    >
      {children}
    </PortContext.Provider>
  );
}
