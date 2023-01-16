import React, { useState, createContext, useContext } from 'react'

const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }) {
  const [relation, setRelation] = useState(null);
  const [columns, setColumns] = useState(null);

  return (
    <ModalContext.Provider value={{ relation, columns, setRelation, setColumns }}>
      { children }
    </ModalContext.Provider>
  )
}
