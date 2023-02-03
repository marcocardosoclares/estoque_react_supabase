import React from 'react'
import { FormCheckbox, FormInput, RelationInput } from '../../components'

const Item = ({ item, withMovements, ...props }) => {
  const columnSize = 'col-sm-6 col-lg-4';

  return (
    <>
      { item?.id && 
        <FormInput 
          columns={columnSize} 
          defaultValue={ item.id } 
          label='Id' 
          name='id' 
          { ...props }
        />
      }
      <FormInput 
        columns={columnSize} 
        defaultValue={ item?.name ?? '' } 
        label='Nome' 
        name='name' 
      { ...props }
      />
      <FormInput 
        columns={columnSize} 
        defaultValue={ item?.description ?? '' } 
        label='Descrição' 
        name='description' 
      { ...props }
      />
      { withMovements && 
        <>
          <FormInput 
            columns={columnSize} 
            defaultValue={ item?.quantity ?? '' }
            label='Quantidade Atual' 
            name='quantity' 
            type='number'  
            { ...props }
          />
          <FormInput 
            columns={columnSize}
            defaultValue={ item?.minimum_quantity ?? '' }
            label='Quantidade Mínima' name='minimum_quantity' 
            type='number'  
            { ...props }
          />
          <FormInput 
            columns={columnSize}
            defaultValue={ item?.maximum_quantity ?? '' }
            label='Quantidade Máxima' 
            name='maximum_quantity' 
            type='number' 
            { ...props }
          />
        </>
      }
      <RelationInput 
        columns={columnSize}
        label='Categoria'
        name='category_id' 
        relation='categories' 
        values={ { 'id' : item?.categories.id ?? '', 'description' : item?.categories.name ?? '' } } 
        disabled={'readOnly' in props}
      />
      <FormCheckbox defaultChecked={ item?.active } label='Ativo' name='active' disabled={'readOnly' in props} />
    </>
  )
}

export default Item