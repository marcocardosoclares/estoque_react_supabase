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
            <h2 className="text-center mb-3">Informe sua senha</h2>
            <div className="form-group mb-3">
                <label htmlFor="password" className='form-label'>Senha</label>
                <input type="password" className="form-control" name="password" id="password" aria-describedby="passwordHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Entrar</button>
        </Form>
    )
}

export default ResetPassword