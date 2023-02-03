import React, { useEffect } from 'react'
import { useModal } from '../contexts/ModalContext'

const RelationInput = ({ columns = 'col-12', label, name, relation, values, ...props }) => {
    const { prepareModal, setModal } = useModal();

    async function handleClick() {
        await prepareModal(relation);
    };

    useEffect(() => {
      setModal(!props.disabled);

      return () => { setModal(false) }
    }, [])
    
    return (
        <div className={ `${ columns } mb-3` }>
            <label htmlFor={ name } className='form-label'>{ label }</label>
            <div className="input-group">
                <input 
                    className="form-control" 
                    defaultValue={values?.id ?? ''} 
                    id={`${relation}-id`} 
                    name={name} 
                    readOnly 
                    type="text" 
                />
                <input 
                    className="form-control" 
                    defaultValue={values?.description ?? ''} 
                    id={`${relation}-description`} 
                    readOnly 
                    type="text" 
                />
                <button 
                    className="btn btn-outline-dark" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modal" 
                    onClick={handleClick} 
                    type="button" 
                    { ...props }
                >
                    <i className="bi bi-search"></i>
                </button>
            </div>
        </div>
    )
}

export default RelationInput