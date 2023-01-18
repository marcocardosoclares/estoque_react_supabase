import React from 'react'
import { useModal } from '../contexts/ModalContext'
import { TableContainer, TableColumns, TableRows } from './table';
import { Modal as bsModal } from 'bootstrap';

const Modal = () => {
    const { columns, rows, relationInput } = useModal();

    function handleClick({ currentTarget }) {
        const [id, description] = currentTarget.querySelectorAll('td');
        const responseId = document.querySelector(`#${relationInput}-id`);
        const responseDescription = document.querySelector(`#${relationInput}-description`);
        responseId.value = id.innerText;
        responseDescription.value = description.innerText;

        const modal = bsModal.getInstance('#modal');
        modal.hide();
    }

    return (
        <div className="modal fade modal-lg" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Buscar</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {rows && 
                            <TableContainer>
                                <TableColumns columns={Object.values(columns)} />
                                <TableRows columns={Object.keys(columns)} rows={rows} onClick={handleClick} />
                            </TableContainer>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal