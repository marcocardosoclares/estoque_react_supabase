import React, { useState, createContext, useContext } from 'react'
import { supabase } from '../services/Database';

const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }) {
  const [columns, setColumns] = useState({ 'id': 'Id', 'name': 'Nome' });
  const [rows, setRows] = useState(null);
  const [modal, setModal] = useState(false);
  const [relationInput, setRelationInput] = useState(null);

  async function prepareModal(relation) {
    const fields = Object.keys(columns).join(', ');
    const { data } = await supabase.from(relation).select(fields).order('id');
    setRelationInput(relation);
    setRows(data);
  }

  return (
    <ModalContext.Provider value={{ columns, modal, relationInput, rows, setColumns, setModal, setRelationInput, prepareModal }}>
      { children }
    </ModalContext.Provider>
  )
}
