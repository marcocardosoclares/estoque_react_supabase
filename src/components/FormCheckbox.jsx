import React from 'react'

const FormCheckbox = ({ columns = 'col-12', label, name, type = 'text', ...props }) => {
    return (
        <div className={ `${ columns } mb-3` }>
            <div className="form-check">
                <input className="form-check-input" id={ name }name={ name }  type="checkbox" { ...props } />
                <label className="form-check-label" htmlFor={ name }>{ label }</label>
            </div>
        </div>
    )
}

export default FormCheckbox