import React from 'react'

const FormInput = ({ columns = 'col-12', label, name, type = 'text', ...props }) => {
    return (
        <div className={ `${ columns } mb-3` }>
            <label htmlFor={ name } className='form-label'>{ label }</label>
            <input 
                className="form-control" 
                id= { name } 
                name={ name } 
                type={ type } 
                { ...props }
            />
        </div>
    )
}

export default FormInput