import React, { useEffect } from 'react'
import { Link, Navigate, useFetcher, useNavigation } from 'react-router-dom'
import { Button, FormInput, Title } from '../../components'
import { useAuth } from '../../contexts/Auth';
import { useNotify } from '../../contexts/NotifyContext';
import { signIn } from '../../controllers/Auth';

export async function action({ request }) {
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    const { error } = await signIn(credentials);
    
    return error;
}

const Login = () => {
    const fetcher = useFetcher();
    const {formData} = useNavigation();
    const { user } = useAuth();
    const addNotify = useNotify();

    useEffect(() => {
      if(fetcher.data) addNotify('E-mail ou senha inválidos')
    }, [fetcher.data])
    

    return user ? <Navigate to="dashboard" /> :
    (
        <>
            <fetcher.Form method='post' className='col-md-4 col-sm-8 col shadow-sm p-4 rounded-2 bg-body'>
                <Title>Login</Title>
                <FormInput label="E-mail" name="email" type="email" />
                <FormInput label="Senha" name="password" type="password" />
                <Button className="btn btn-primary" disabled={formData}>
                    { formData ? 'Entrando...' : 'Entrar' }
                </Button>
                <Link to='/esqueci' className='text-decoration-none float-end'>Esqueci a senha</Link>
            </fetcher.Form> 
        </>
    ) 
}

export default Login