import React from 'react'
import { Checkbox, Input } from '../../components'
import FormGroup from '../../components/FormGroup';
import RelationInput from '../../components/RelationInput';

const Item = ({ item, quantidades }) => {
  const columnSize = 'col-sm-6 col-lg-4';

  return (
    <>
      { item?.id && 
        <FormGroup columns={columnSize}>
          <Input label='Id' name='id' fieldValue={ item?.id } readOnly />
        </FormGroup>
      }
      <FormGroup columns={columnSize}>
        <Input label='Nome' name='name' fieldValue={ item?.name ?? '' } />
      </FormGroup>
      <FormGroup columns={columnSize}>
        <Input label='Descrição' name='description' fieldValue={ item?.description ?? '' } />
      </FormGroup>
      <FormGroup columns={columnSize}>
        <RelationInput 
        label='Categoria' 
        name='category_id' 
        relation='categories' 
        fieldValue={ { 'id' : item?.categories.id ?? '', 'description' : item?.categories.name ?? '' } } />
      </FormGroup>
      <FormGroup>
        <Checkbox label='Ativo' name='active' checked={ item?.active || false } />
      </FormGroup>
      { quantidades && 
        <>
          <FormGroup columns={columnSize}>
            <Input label='Quantidade Atual' name='quantity' type='number' fieldValue={ item?.quantity ?? '' } />
          </FormGroup>
          <FormGroup columns={columnSize}>
            <Input label='Quantidade Mínima' name='minimum_quantity' type='number' fieldValue={ item?.minimum_quantity ?? '' } />
          </FormGroup>
          <FormGroup columns={columnSize}>
            <Input label='Quantidade Máxima' name='maximum_quantity' type='number' fieldValue={ item?.maximum_quantity ?? '' } />
          </FormGroup>
        </>
      }
    </>
      
      
      
     
      
      
      
  )
}

export default Item