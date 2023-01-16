import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

export async function loader({ params }) {
    return getItem(params.itemId);
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