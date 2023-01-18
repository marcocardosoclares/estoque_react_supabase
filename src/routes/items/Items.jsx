import React, { useEffect } from 'react'
import { Form, Link, useLoaderData, useSubmit } from 'react-router-dom';
import { TableContainer, TableColumns, ItemTableRows } from '../../components/table';
import Title from '../../components/Title';
import { getItems } from '../../controllers/Items';
import { indexColumns } from '../../models/Item';

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    const { data, error } = await getItems(query);
    return { data, error, query };
}

const Items = () => {
    const { data, error, query } = useLoaderData();
    const submit = useSubmit();

    function handleChange({ currentTarget }) {
        const isFirstSearch = query == null;
        submit(currentTarget.form, { replace: !isFirstSearch });
    }

    useEffect(() => {
        document.getElementById("q").value = query;
    }, [query]);

    return (
        <>
            <div className="row g-3 justify-content-between mb-5">
                <div className="col-auto hstack gap-3">
                    <Title color='secondary' position='start'>Meus Itens</Title>
                    <Link to='inserir' className='btn btn-sm btn-success'>Inserir</Link>
                </div>
                <div className="col-sm-auto col-12">
                    <Form className="border rounded row gx-0">
                        <div className="col-auto">
                            <button className="btn shadow-none border-0">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                        <div className="col">
                            <input 
                            type="search" 
                            name="q" 
                            id="q" 
                            placeholder="Buscar..." 
                            className="form-control shadow-none border-0 bg-transparent" 
                            onChange={handleChange}
                            />
                        </div>
                    </Form>
                </div>
            </div>
            { data && 
                <TableContainer>
                    <TableColumns columns={Object.values(indexColumns)} />
                    <ItemTableRows actions columns={Object.keys(indexColumns)} rows={data} />
                </TableContainer>
            }
        </>
    )
}

export default Items