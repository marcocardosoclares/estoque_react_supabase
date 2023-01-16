import React from 'react'
import { useLoaderData } from 'react-router-dom'
import BaseForm from '../../components/BaseForm';
import { getItem } from '../../controllers/Items';
import Item from './Item';

export async function loader({ params }) {
  const { data, error } = await getItem(params.itemId);
  return { data, error };
}

const ShowItem = () => {
    const { data, error } = useLoaderData();

    return (
      <BaseForm disabled title="Visualizar Item">
        <Item item={data} />
      </BaseForm>
    )
}

export default ShowItem