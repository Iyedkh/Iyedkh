import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const CvModalContext = createContext({
  isOpen: false,
  openCvModal: () => {},
  closeCvModal: () => {},
});

export const CvModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCvModal = useCallback(() => setIsOpen(true), []);
  const closeCvModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  return (
    <CvModalContext.Provider value={{ isOpen, openCvModal, closeCvModal }}>
      {children}
    </CvModalContext.Provider>
  );
};

export const useCvModal = () => {
  const context = useContext(CvModalContext);
  if (!context) {
    throw new Error("useCvModal must be used within a CvModalProvider");
  }
  return context;
};
