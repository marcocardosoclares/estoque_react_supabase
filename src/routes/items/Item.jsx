import React from 'react'
import { Checkbox, Input } from '../../components'
import Select from '../../components/Select';
import { getCategories } from '../../controllers/Categories';

const Item = ({ asset }) => {
  const columnSize = 'col-sm-6 col-lg-4';
  
  return (
    <>
      <Input columns={columnSize} label='Nome' name='name' fieldValue={asset?.name ?? '' } />
      <Input columns={columnSize} label='Descrição' name='description' fieldValue={asset?.description ?? '' } />
      <Input columns={columnSize} label='Quantidade Atual' name='quantity' fieldValue={asset?.quantity ?? '' } />
      <Input columns={columnSize} label='Quantidade Mínima' name='minimum_quantity' fieldValue={asset?.minimum_quantity ?? '' } />
      <Input columns={columnSize} label='Quantidade Máxima' name='maximum_quantity' fieldValue={asset?.maximum_quantity ?? '' } />
      <Select columns={columnSize} label='Categoria' name='group_id' loadFunction={getCategories} fieldValue={asset?.group_id ?? '' } />
      <Checkbox label='Ativo' name='active' checked={asset?.active} />
    </>
  )
}

export default Item