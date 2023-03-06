import React, { useEffect } from 'react'
import { redirect, useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { getItem } from '../../controllers/Items';
import { Insert } from '../../models/Movement';
import Movement from './Movement';

export async function action({ request }) {
    const formData = await request.formData();
    const movement = Object.fromEntries(formData);
    const {error} = await Insert(movement);
    
    if(!error) return redirect('/itens');
    return {error};
}

export async function loader({ params }) {
  return await getItem(params.itemId);
}

const InsertMovement = () => {
    const loader = useLoaderData();
    const fetcher = useFetcher();
    const addNotify = useNotify();
    const navigate = useNavigate();

    useEffect(() => {
        if(fetcher.data?.error) addNotify(fetcher.data.error.message)
      }, [fetcher.data])

    return fetcher.state === 'loading' 
    ? <Spinner /> 
    : ( loader.error 
        ? <Alert message="Não foi possível carregar o item para movimentação." />
        : <>
            <Title color='secondary' position='start'>Movimentar Estoque</Title>
            <fetcher.Form method='post'>
                <fieldset className='row g-3'>
                    <Movement item={loader.data} />
                </fieldset>
                <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
                    { fetcher.formData ? 'Movimentando...' : 'Movimentar' }
                </Button>
                <Button 
                    className="btn btn-dark" 
                    disabled={fetcher.formData} 
                    onClick={() => navigate('/itens')}
                    type="button"
                >
                    Voltar
                </Button>
            </fetcher.Form>
        </> 
    )
}

export default InsertMovement