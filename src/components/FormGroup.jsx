import React, { Children, cloneElement } from 'react'

const FormGroup = ({ children, columns = 'col-12' }) => {
  return (
    <div className={ `${ columns } form-group mb-3` }>
      { children }
    </div>
  )
}

export default FormGroup