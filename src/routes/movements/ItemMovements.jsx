import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { TableContainer, TableColumns, MovementTableRows } from '../../components/table';
import {Alert, Title} from '../../components';
import { indexColumns } from '../../models/Movement';
import { getMovements } from '../../controllers/Movements';

export async function loader({ params }) {
    return await getMovements(params.itemId);
}

const ItemMovements = () => {
    const {data, error} = useLoaderData();

    return error
    ? <Alert message={error.message} />
    : <>
        <div className="mb-5">
            <Title color='secondary' position='start'>
                { `${data?.item?.id} - ${data?.item?.name}` }
            </Title>
        </div>
        <TableContainer>
            <caption className='fs-5 text-secondary fw-bold'>{`Saldo atual: ${data?.item?.quantity}`}</caption>
            <TableColumns columns={indexColumns} />
            <MovementTableRows columns={Object.keys(indexColumns)} rows={data?.movements} />
        </TableContainer>
    </>
}

export default ItemMovements