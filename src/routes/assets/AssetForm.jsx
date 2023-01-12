import React from 'react'
import { Form, redirect } from 'react-router-dom'
import { Button, Checkbox, Input, Title } from '../../components'
import Select from '../../components/Select';
import { insertAsset } from '../../controllers/Assets';
import { getCategories } from '../../controllers/Categories';

export async function action({ request, params }) {
    const formData = await request.formData();
    const asset = Object.fromEntries(formData);
    console.log('dados item',asset)
    const { error } = await insertAsset(asset);

    return redirect('/itens');
}

const AssetForm = () => {
  return (
    <>
        <Title color='secondary' position='start'>Novo Item</Title>
        <Form method='post' className='row'>
            <div className="col-md-4 col-sm-6"><Input label='Nome' name='name' /></div>
            <div className="col-md-4 col-sm-6"><Input label='Descrição' name='description' /></div>
            <div className="col-md-4 col-sm-6"><Input label='Quantidade Atual' name='quantity' /></div>
            <div className="col-md-4 col-sm-6"><Input label='Quantidade Mínimo' name='minimum_quantity' /></div>
            <div className="col-md-4 col-sm-6"><Input label='Quantidade Máximo' name='maximum_quantity' /></div>
            <div className="col-md-4 col-sm-6"><Select label='Categoria' name='group_id' loadFunction={getCategories} /></div>
            <div className="col-12"><Checkbox label='Ativo' name='active' /></div>
            <div className="col-12"><Button>Gravar</Button></div>
        </Form>
    </>
  )
}

export default AssetForm