import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { Button } from '../../components';
import Table from '../../components/Table';
import Title from '../../components/Title';
import { getAssets } from '../../controllers/Assets';

export async function loader() {
    const { data, error } = await getAssets();
    return { data, error };
}

const Assets = () => {
    const { data, error } = useLoaderData();

    const columns = {
        'id': 'Id', 'name': 'Nome', 'description': 'Descrição'
    };

    return (
        <>
            <div className="hstack gap-3 mb-3">
                <Title color='secondary' position='start'>Meus Itens</Title>
                <Link to='inserir' className='btn btn-sm btn-success'>Inserir</Link>
            </div>
            { data && <Table columns={columns} rows={data} /> }
        </>
    )
}

export default Assets