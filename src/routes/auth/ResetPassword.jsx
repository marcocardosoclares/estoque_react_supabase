import React from 'react'
import { Form, Navigate, redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth';
import { resetPassword } from '../../controllers/Auth';

export async function action({ request }) {
    
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const { error } = await resetPassword(credentials.password);

    if (!error) return redirect('/');

    return null;
}

const ResetPassword = () => {
    const {event} = useAuth();
    
    if (event !== 'PASSWORD_RECOVERY') return <Navigate to="/" />
    
    return (
        <Form method='post' className='col-md-4 col-sm-8 col shadow p-4 rounded-2 bg-white'>
            <Title>Informe a sua senha</Title>
            <Input label="Senha" name="password" type="password" />
            <Input label="Confirme a senha" name="password_confirm" type="password" />
            <Button>Alterar</Button>
        </Form>
    )
}

export default ResetPassword