import React from 'react'
import { redirect } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import { Insert } from '../../models/Item';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const asset = Object.fromEntries(formData);
  const success = await Insert(asset);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

const InsertItem = () => {
  const columnSize = 'col-sm-6 col-lg-4';
  
  return (
    <BaseForm title="Novo Item">
        <Item />
    </BaseForm>
  )
}

export default InsertItem