import React, { useEffect } from 'react'
import { Form, Link, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';
import { TableContainer, TableColumns, ItemTableRows } from '../../components/table';
import {SearchSpinner, Spinner, Title} from '../../components';
import { getItems } from '../../controllers/Items';
import { indexColumns } from '../../models/Item';
import { useNotify } from '../../contexts/NotifyContext';

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    const sort = url.searchParams.get("s");
    const { data, error } = await getItems(query, sort);

    return { data, error, query };
}

const Items = () => {
    const { data, error, query } = useLoaderData();
    const addNotify = useNotify();
    const submit = useSubmit();
    const navigation = useNavigation();
    const searching = navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");


    function handleChange({ currentTarget }) {
        const isFirstSearch = query == null;
        submit(currentTarget.form, { replace: !isFirstSearch });
    }

    useEffect(() => {
        if (error) addNotify('Não foi possível carregar os itens');
        
        document.getElementById("q").value = query;
    }, [query]);

    return (
        <>
            <div className="row gy-3 justify-content-between mb-5">
                <div className="col-auto hstack gap-3">
                    <Title color='secondary' position='start'>Meus Itens</Title>
                    <Link to='inserir' className='btn btn-sm btn-success'>Inserir</Link>
                </div>
                <div className="col-sm-auto col-12">
                    <Form className="border rounded row">
                        <div className="col-auto">
                            <button className="btn shadow-none border-0">
                                { searching 
                                    ? <SearchSpinner />
                                    : <i className="bi bi-search"></i>
                                }
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
            {!searching && (navigation.state === 'idle'
                ? 
                <TableContainer>
                    <TableColumns columns={indexColumns} />
                    <ItemTableRows actions columns={Object.keys(indexColumns)} rows={data} />
                </TableContainer>
                :
                <Spinner />)
            }
        </>
    )
}

export default Items