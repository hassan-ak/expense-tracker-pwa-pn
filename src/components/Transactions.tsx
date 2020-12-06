// React Imports
import React from 'react';

// Define Data type Props
type Props = {
    transaction: any;
    deleteTrans : any;
}

export const Transactions  : React.FC<Props> = ({transaction,deleteTrans}) => {
    // Determine while transaction amount is income or expense
    const sign = transaction.amount < 0 ?  '-' : '+';
    // Determine style based upon transaction type
    const style = transaction.amount < 0 ?  'expense-h' : 'income-h';

    return (
        <div>
            {/* List elements for each transaction */}
            <li className={style}>
                {/* Display transaction Description */}
                {transaction.description}
                {/* Display transaction amount */}
                <span>
                    {sign}${Math.abs(transaction.amount)}
                </span>
                {/* button fro deleting a transaction */}
                <button className="del" onClick={()=>{deleteTrans(transaction.id)}}>
                    X
                </button>
            </li>
        </div>
    )
}