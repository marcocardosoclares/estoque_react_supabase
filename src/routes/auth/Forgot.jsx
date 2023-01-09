import React from 'react'
import { Form, Link, redirect } from 'react-router-dom'
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
            <h2 className="text-center mb-3">Informe seu e-mail</h2>
            <div className="form-group mb-3">
                <label htmlFor="email" className='form-label'>E-mail</label>
                <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-primary">Entrar</button>
                <Link to="/" className='text-decoration-none'>Ah, lembrei!</Link>
            </div>
        </Form>
    )
}

export default Forgot