import React from 'react'
import { FormInput, Select } from '../../components'

const Movement = ({ item }) => {
    const columnSize = 'col-sm-6 col-lg-4';
    const movementOptions = [
        {'value': 'I', 'name': 'Entrada'},
        {'value': 'O', 'name': 'Saída'}
    ]

    return (
        <>
            <FormInput 
                columns={columnSize} 
                defaultValue={ item.id } 
                label='Id' 
                name='item_id' 
                readOnly
            />
            <FormInput 
                columns={columnSize} 
                defaultValue={ item?.name } 
                label='Nome' 
                name='item_name' 
                disabled
            />
            <FormInput 
                columns={columnSize} 
                defaultValue={ item?.description } 
                label='Descrição' 
                name='item_description' 
                disabled
            />
            <FormInput 
                columns={columnSize}
                defaultValue={ item?.quantity } 
                label='Quantidade Atual' 
                name='item_quantity' 
                type='number'  
                readOnly
            />
            <Select 
                columns={columnSize}
                options={movementOptions} 
                label='Tipo de movimento' 
                name='in_out' 
            />
            <FormInput 
                columns={columnSize}
                label='Quantidade a movimentar' 
                name='quantity' 
                type='number'  
            />
            <FormInput 
                columns={columnSize} 
                label='Comentário' 
                name='description' 
            />
        </>
    )
}

export default Movement