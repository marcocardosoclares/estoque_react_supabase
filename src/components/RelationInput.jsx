import { Modal } from 'bootstrap';
import React, { useEffect } from 'react'
import { useModal } from '../contexts/ModalContext'

const RelationInput = ({ columns, label, name, relation }) => {
    const { setRelation, setColumns } = useModal();

    async function handleClick() {
        const bsModal = Modal.getOrCreateInstance('#modal');
        bsModal.show();
    };
    
    useEffect(() => {
      setRelation(relation);
      setColumns(columns);
    }, [])
    
    return (
        <>
            <label htmlFor={ name } className='form-label'>{ label }</label>
            <div className="input-group">
                <input type="text" className="form-control" name={name} id={name} />
                <input type="text" className="form-control w-50" />
                <button type="button" className="btn btn-outline-secondary" onClick={handleClick}>
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </>
    )
}

export default RelationInput