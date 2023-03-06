import React, { useEffect } from 'react'
import { redirect, useFetcher, useLoaderData, useNavigate } from 'react-router-dom'
import { Alert, Button, Title } from '../../components';
import { useNotify } from '../../contexts/NotifyContext';
import { getCategory, updateCategory } from '../../controllers/Categories';
import Category from './Category';

export async function action({ request }) {
  const formData = await request.formData();
  const category = Object.fromEntries(formData);
  const { error } = await updateCategory(category);
  if(!error) return redirect('/categorias');
  return {error}
}

export async function loader({ params }) {
  return await getCategory(params.categoryId);
}

const UpdateCategory = () => {
    const fetcher = useFetcher();
    const loader = useLoaderData();
    const navigate = useNavigate();
    const addNotify = useNotify();

    useEffect(() => {
      if(fetcher.data?.error) addNotify(fetcher.data.error.message)
    }, [fetcher.data])
    
    return loader.error
    ? <Alert message={loader.error.message} />
    : <>
        <Title color='secondary' position='start'>
            Alterar categoria
        </Title>
        <fetcher.Form method='post'>
            <fieldset className='row g-3'>
                <Category category={loader.data} />
            </fieldset>
            <Button className="btn btn-primary me-3" disabled={fetcher.formData}>
                { fetcher.formData ? 'Alterando...' : 'Alterar' }
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
}

export default UpdateCategory