import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button';

const FormCloseButton = () => {
    const navigate = useNavigate();
    return (
        <Button color="dark" onClick={navigate(-1)}>Fechar</Button>
    )
}

export default FormCloseButton