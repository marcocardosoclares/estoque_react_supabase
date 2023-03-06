import React, { useEffect } from 'react'
import { redirect, useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { getItem, updateItem } from '../../controllers/Items';
import Item from './Item';

export async function action({ request }) {
  
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  item.active = 'active' in item;
  const {error} = await updateItem(item);
  
  if (!error) {
    return redirect('/itens');
  }

  return {error};
}

export async function loader({ params }) {
  return await getItem(params.itemId);
}

const UpdateItem = () => {
    const fetcher = useFetcher();
    const loader = useLoaderData();
    const navigate = useNavigate();
    const addNotify = useNotify();

    useEffect(() => {
        if(fetcher.data?.error) addNotify(fetcher.data.error.message)
      }, [fetcher.data])

    return fetcher.state === 'loading' 
    ? <Spinner /> 
    : loader.error
    ? <Alert message={loader.error.message} />
    : <>
        <Title color='secondary' position='start'>Alterar item</Title>
        <fetcher.Form method='post'>
            <fieldset className='row g-3'>
                <Item item={loader.data} />
            </fieldset>
            <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
                { fetcher.formData ? 'Alterando...' : 'Alterar' }
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
}

export default UpdateItem