import React from 'react'
import { Navigate, useFetcher } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth';
import { useNotify } from '../../contexts/NotifyContext';
import { resetPassword } from '../../controllers/Auth';

export async function action({ request }) {
    
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    return await resetPassword(credentials.password);

}

const ResetPassword = () => {
    const fetcher = useFetcher();
    const { event, user } = useAuth();
    const addNotify = useNotify();

    useEffect(() => {
      if(fetcher.data?.error) addNotify(fetcher.data.error.message)
    }, [fetcher.data])
    
    if (event !== 'PASSWORD_RECOVERY' || user) return <Navigate to="/" />
    
    return (
        <fetcher.Form method='post' className='col-md-4 col-sm-8 col shadow p-4 rounded-2 bg-white'>
            <Title>Informe a sua senha</Title>
            <Input label="Senha" name="password" type="password" />
            <Input label="Confirme a senha" name="password_confirm" type="password" />
            <Button>Alterar</Button>
        </fetcher.Form>
    )
}

export default ResetPassword