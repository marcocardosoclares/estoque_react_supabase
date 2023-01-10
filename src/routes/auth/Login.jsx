import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { Button, Checkbox, CustomLink, Input, JustifyBetween, Title } from '../../components'
import { signIn } from '../../controllers/Auth';

export async function action({ request }) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const { error } = await signIn(credentials);
    
    if (!error) {
        return redirect('dashboard');
    }

    return null;
}

const Login = () => {
    return (
        <Form method='post' className='col-md-4 col-sm-8 col shadow-sm p-4 rounded-2 bg-body'>
            <Title>Login</Title>
            <Input label="E-mail" name="email" type="email" />
            <Input label="Senha" name="password" type="password" />
            <Checkbox label="Manter conexão" name="remember" />
            <JustifyBetween>
                <Button>Entrar</Button>
                <CustomLink route='/esqueci'>Esqueci a senha</CustomLink>
            </JustifyBetween>
        </Form>
    )
}

export default Login