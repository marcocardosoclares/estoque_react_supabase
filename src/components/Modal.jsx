import React, { useEffect, useState } from 'react'
import { useModal } from '../contexts/ModalContext'
import { getRelation } from '../controllers/RelationSearch';
import Table from './Table';

const Modal = () => {
    const { relation, columns } = useModal();
    const [rows, setRows] = useState(null)

    useEffect(() => {
      async function relations() {
        const {data, error } = await getRelation(relation, columns);
        setRows(data);
      }

      if(relation) relations();
    }, [])
    
    return (
        <div className="modal fade modal-lg" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Buscar</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        { rows && <Table columns={ {'id': 'Id', 'name': 'Nome'} } rows={rows} title='Categorias' /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal