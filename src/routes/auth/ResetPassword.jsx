import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { resetPassword } from '../../controllers/Auth';

export async function action({ request }) {
    
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const { error } = await resetPassword(credentials.password);

    if (!error) return redirect('/');

    return null;
}

const ResetPassword = () => {
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