import React from 'react'
import { FormInput } from '../../components'

const Item = ({ category, ...props }) => {
    const columnSize = 'col-sm-6 col-lg-4';

    return (
        <>
            { category?.id && 
                <FormInput 
                columns={columnSize} 
                defaultValue={ category.id } 
                label='Id' 
                name='id' 
                { ...props }
                />
            }
            <FormInput 
                columns={columnSize} 
                defaultValue={ category?.name ?? '' } 
                label='Nome' 
                name='name' 
                { ...props }
            />
            <FormInput 
                columns={columnSize} 
                defaultValue={ category?.description ?? '' } 
                label='Descrição' 
                name='description' 
                { ...props }
            />
        </>
    )
}

export default Item