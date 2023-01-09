import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { Button, CustomLink, Input, JustifyBetween, Title } from '../../components';
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
    return (
        <Form method='post' className='col-md-4 col-sm-8 col shadow p-4 rounded-2 bg-white'>
            <Title>Informe o seu e-mail</Title>
            <Input label="E-mail" name="email" type="email" />
            <JustifyBetween>
                <Button>Enviar</Button>
                <CustomLink route='/'>Ah, lembrei!</CustomLink>
            </JustifyBetween>
        </Form>
    )
}

export default Forgot