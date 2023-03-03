import React from 'react';

const MovementTableRows = ({ columns, rows }) => {

    const rowColor = {
        'I': 'table-success',
        'O': 'table-danger'
    };

    let balance;

    function getBalance({in_out, quantity}, index) {
        balance = index === 0
        ? quantity
        : (
            in_out === 'I'  
            ? balance + quantity
            : balance - quantity
        );

        return balance;
    }
    
    return (
        <tbody>
            { rows.map((row, index) =>
                <tr className={rowColor[row.in_out]} key={index}>
                    {columns.map(column => 
                        <td key={column}>{ column === 'balance' ? getBalance(row, index) : row[column] }</td>
                    )}
                </tr>
            ) }
        </tbody>
    )
}

export default MovementTableRows