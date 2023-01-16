import React from 'react'
import { redirect } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import { Insert } from '../../models/Item';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const success = await Insert(item);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

const InsertItem = () => {
  return (
    <BaseForm title="Novo Item">
        <Item />
    </BaseForm>
  )
}

export default InsertItem