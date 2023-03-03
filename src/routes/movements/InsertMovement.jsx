import React, { useEffect } from 'react'
import { redirect, useFetcher, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { getItem } from '../../controllers/Items';
import { Insert } from '../../models/Movement';
import Movement from './Movement';

export async function action({ request }) {
  const formData = await request.formData();
  const movement = Object.fromEntries(formData);

  return await Insert(movement) || redirect('/itens');
}

export async function loader({ params }) {
  const { data } = await getItem(params.itemId);
  return data;
}

const InsertMovement = () => {
    const item = useLoaderData();
    const fetcher = useFetcher();
    const addNotify = useNotify();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    useEffect(() => {
        if(fetcher?.data?.error) addNotify(fetcher.data.error)
      }, [fetcher.data])

    return state === 'loading' 
    ? <Spinner /> 
    : ( item 
        ? <>
            <Title color='secondary' position='start'>Movimentar Estoque</Title>
            <fetcher.Form method='post'>
                <fieldset className='row g-3'>
                    <Movement item={item} />
                </fieldset>
                <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
                    { fetcher.formData ? 'Movimentando...' : 'Movimentar' }
                </Button>
                <Button 
                    className="btn btn-dark" 
                    disabled={formData} 
                    onClick={() => navigate('/itens')}
                    type="button"
                >
                    Voltar
                </Button>
            </fetcher.Form>
        </> 
        : <Alert message="Não foi possível carregar o item para movimentação." />
    )
}

export default InsertMovement