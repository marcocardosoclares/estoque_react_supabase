import React from 'react'
import { Form, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { getCategory } from '../../controllers/Categories';
import Category from './Category';

export async function loader({ params }) {
  return await getCategory(params.categoryId);
}

const ShowCategory = () => {
    const { data, error } = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : error 
    ? <Alert message='Não foi possível carregar a categoria' /> 
    : <>
        <Title color='secondary' position='start'>Visualizar categoria</Title>
        <Form method='post'>
            <fieldset className='row g-3'>
                <Category category={data} readOnly />
            </fieldset>
            <Button 
                className="btn btn-dark" 
                disabled={formData} 
                onClick={() => navigate('/categorias')}
                type="button"
            >
                Voltar
            </Button>
        </Form>
    </>
}

export default ShowCategory