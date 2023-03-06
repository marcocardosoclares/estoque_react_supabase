import React, { useEffect } from 'react'
import { redirect, useFetcher, useNavigate } from 'react-router-dom'
import { Button, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { Insert } from '../../models/Item';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const {error} = await Insert(item);
  
  if(!error) return redirect('/itens');
  return {error}
}

const InsertItem = () => {
  const fetcher = useFetcher();
  const addNotify = useNotify();
  const navigate = useNavigate();

  useEffect(() => {
    if(fetcher.data?.error) addNotify(fetcher.data.error.message)
  }, [fetcher.data])
  
  
  return (
    <>
      <Title color='secondary' position='start'>Incluir item</Title>
      <fetcher.Form method='post'>
        <fieldset className='row g-3'>
          <Item />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
          { fetcher.formData ? 'Incluindo...' : 'Incluir' }
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

export default InsertItem