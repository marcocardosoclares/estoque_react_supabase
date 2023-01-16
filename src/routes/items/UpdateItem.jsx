import React from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import { assetFullInsert } from '../../controllers/ProcessAsset';
import Asset from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const asset = Object.fromEntries(formData);
  const success = await assetFullInsert(asset);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

export async function loader({ params }) {
    return getAsset(params.assetId);
}

const UpdateAsset = () => {
    const asset = useLoaderData();
    return (
        <BaseForm title="Novo Item">
            <Asset asset={asset} />
        </BaseForm>
    )
}

export default UpdateAsset