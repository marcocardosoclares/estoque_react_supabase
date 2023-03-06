import React, { useEffect } from 'react'
import { redirect, useFetcher, useNavigate } from 'react-router-dom'
import { Button, Title } from '../../components';
import { insertCategory } from '../../controllers/Categories';
import { useNotify } from '../../contexts/NotifyContext';
import Category from './Category';

export async function action({ request }) {
  const formData = await request.formData();
  const category = Object.fromEntries(formData);
  const {error} = await insertCategory(category);
  
  if (!error) {
    return redirect('/categorias');
  }

  return {error};
}

const InsertCategory = () => {
    const navigate = useNavigate();
    const fetcher = useFetcher();
    const addNotify = useNotify();

    useEffect(() => {
      if(fetcher.data?.error) addNotify(fetcher.data.error.message)
    }, [fetcher.data])
  
    return (
      <>
        <Title color='secondary' position='start'>Incluir categoria</Title>
        <fetcher.Form method='post'>
          <fieldset className='row g-3'>
            <Category />
          </fieldset>
          <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
            { fetcher.formData ? 'Incluindo...' : 'Incluir' }
          </Button>
          <Button 
            className="btn btn-dark" 
            disabled={fetcher.formData} 
            onClick={() => navigate('/categorias')}
            type="button"
          >
            Voltar
          </Button>
        </fetcher.Form>
      </>
    )
}

export default InsertCategory