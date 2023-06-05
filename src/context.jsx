import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const openModal = () => setIsModalOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
