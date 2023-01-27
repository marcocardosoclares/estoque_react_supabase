import React from 'react'
import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { Button, FormInput, Title } from '../../components';
import { resetPasswordEmail } from '../../controllers/Auth';

export async function action({ request }) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const { error } = await resetPasswordEmail(credentials.email);
    if (!error) {
        return redirect('/');
    }

    return null;
}

const Forgot = () => {
    const {formData} = useNavigation();
    
    return (
        <Form method='post' className='col-md-4 col-sm-8 col shadow p-4 rounded-2 bg-body'>
            <Title>Informe o seu e-mail</Title>
            <FormInput label="E-mail" name="email" type="email" />
            <Button className="btn btn-primary" disabled={formData}>
                { formData ? 'Enviando...' : 'Enviar' }
            </Button>
            <Link to='/' className='text-decoration-none float-end'>Ah, lembrei!</Link>
        </Form>
    )
}

export default Forgot