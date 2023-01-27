import React from 'react'
import { Form, Link, redirect, useNavigation } from 'react-router-dom'
import { Button, FormInput, Title } from '../../components'
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
    const {formData} = useNavigation();

    return (
        <Form method='post' className='col-md-4 col-sm-8 col shadow-sm p-4 rounded-2 bg-body'>
            <Title>Login</Title>
            <FormInput label="E-mail" name="email" type="email" />
            <FormInput label="Senha" name="password" type="password" />
            <Button className="btn btn-primary" disabled={formData}>
                { formData ? 'Entrando...' : 'Entrar' }
            </Button>
            <Link to='/esqueci' className='text-decoration-none float-end'>Esqueci a senha</Link>
        </Form>
    )
}

export default Login