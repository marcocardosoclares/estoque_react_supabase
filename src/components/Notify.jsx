import React from 'react'

const Notify = ({ message, theme, index }) => {
    return (
        <div 
            className={`toast align-items-center text-bg-${ theme } border-0`} 
            id={`toast${index}`}
            role="alert" 
            aria-live="assertive" 
            aria-atomic="true"
        >
            <div className="d-flex">
                <div className="toast-body">
                    { message }
                </div>
                <button 
                    type="button" 
                    className="btn-close btn-close-white me-2 m-auto" 
                    data-bs-dismiss="toast" 
                    data-bs-target={`#toast${index}`}
                    aria-label="Close"
                ></button>
            </div>
        </div>
    )
}

export default Notify