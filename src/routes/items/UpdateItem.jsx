import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import { getItem, updateItem } from '../../controllers/Items';
import Item from './Item';

export async function action({ request }) {
  
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const success = await updateItem(item);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

export async function loader({ params }) {
  const { data, error } = await getItem(params.itemId);
  return data;
}

const UpdateItem = () => {
    const item = useLoaderData();
    return (
        <BaseForm title="Editar Item">
            <Item item={item} />
        </BaseForm>
    )
}

export default UpdateItem