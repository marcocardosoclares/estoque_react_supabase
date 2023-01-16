import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Table from '../../components/Table';
import Title from '../../components/Title';
import { getItems } from '../../controllers/Items';
import { indexColumns } from '../../models/Item';

export async function loader() {
    const { data, error } = await getItems();
    return { data, error };
}

const Items = () => {
    const { data, error } = useLoaderData();

    return (
        <>
            <div className="hstack gap-3 mb-5">
                <Title color='secondary' position='start'>Meus Itens</Title>
                <Link to='inserir' className='btn btn-sm btn-success'>Inserir</Link>
            </div>
            { data && <Table columns={indexColumns} rows={data} /> }
        </>
    )
}

export default Items