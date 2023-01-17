import React, { useEffect } from 'react'
import { useModal } from '../contexts/ModalContext'

const RelationInput = ({ label, name, relation }) => {
    const { prepareModal, setModal } = useModal();

    async function handleClick() {
        await prepareModal(relation);
    };

    useEffect(() => {
      setModal(true);
    }, [])
    
    return (
        <>
            <label htmlFor={ name } className='form-label'>{ label }</label>
            <div className="input-group">
                <input type="text" className="form-control" name={name} id={`${relation}-id`} readOnly />
                <input type="text" className="form-control w-50" id={`${relation}-description`} readOnly />
                <button type="button" className="btn btn-outline-dark" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#modal">
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </>
    )
}

export default RelationInput