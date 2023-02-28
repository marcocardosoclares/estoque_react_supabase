import React from 'react';
import CrudActions from '../CrudActions';
import MovementActions from '../MovementActions';
import Badge from '../Badge';

const ItemTableRows = ({ actions, columns, rows, ...props }) => {

    const colors = {
        'min': {'color': 'warning', 'text': 'Mínimo'},
        'max': {'color': 'success', 'text': 'Máximo'},
        'out': {'color': 'danger', 'text': 'Em falta'}
    };
    
    return (
        <tbody>
            { rows.map((row) => (
                <tr key={row.id} { ...props }>
                    { columns.map((column, index) => (
                        <td key={index}>
                            { 
                                column === 'item_status' && row[column] 
                                ? <Badge color={colors[row[column]].color}>{colors[row[column]].text}</Badge>
                                : row[column] 
                            }
                        </td>
                    )) }
                    { actions && 
                        <td>
                            <CrudActions route={`${row.id}`}>
                                <MovementActions itemId={row.id} />
                            </CrudActions>
                        </td> 
                    }
                </tr>
            )) }
        </tbody>
    )
}

export default ItemTableRows