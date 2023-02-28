import React from 'react'
import { useEffect } from 'react';
import { redirect, useFetcher, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { Insert } from '../../models/Item';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const error = await Insert(item);
  
  return error || redirect('/itens');
}

const InsertItem = () => {
  const fetcher = useFetcher();
  const addNotify = useNotify();
  const navigate = useNavigate();
  const { formData } = useNavigation();

  useEffect(() => {
    console.log(fetcher)
    if(fetcher.error) addNotify('Não foi possível inserir o item.')
  }, [fetcher.data])
  
  
  return (
    <>
      <Title color='secondary' position='start'>Incluir item</Title>
      <fetcher.Form method='post'>
        <fieldset className='row g-3'>
          <Item />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={formData}>
          { formData ? 'Incluindo...' : 'Incluir' }
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
  )
}

export default InsertItem