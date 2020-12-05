// React Imports
import React from 'react';

// History component Function
export const History = () => {
    return (
        // Header Container
        <div className="transaction-history">
            {/* Section Heading */}
            <h3>Transaction History</h3>
            {/* list to show transaction History */}
            <ul className="list">
                {/* List elements for each transaction */}
                <li className="income-h">
                    In
                    <span>$100</span>
                    {/* button fro deleting a transaction */}
                    <button className="del">X</button>
                </li>
                <li className="expense-h">
                    Out
                    <span>-$100</span>
                    <button className="del">X</button>
                </li>
                <li className="income-h">
                    In1
                    <span>$250</span>
                    <button className="del">X</button>
        	    </li>
                <li className="expense-h">
                    Out1
                    <span>-$70</span>
                    <button className="del">X</button>
                </li>
            </ul>
        </div>
    )
}