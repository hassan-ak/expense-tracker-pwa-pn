// React Imports
import React, { useContext } from 'react';
// Functional Component Imports
import { GlobalContext } from "../functionalComponent/GlobalContext";

// Summary component Function
export const Summary = () => {
    // use GloablContext to fetch data
    const context = useContext(GlobalContext);
    // Extarct amounts from data
    const amounts = context.transactions.map(transaction => transaction.amount);
    // Sum of Income Amounts
    const income1 = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0);
    const income = income1.toFixed(2);
    // Sum of Income Amounts
    const expense1 = Math.abs(amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0));
    const expense = expense1.toFixed(2);
    return (
        // Summary Container
        <div className="income-expense">
            {/* Income Summary */}
            <div>
                <h4>Income</h4>
                <p className="income-m">
                    $ {income}
                </p>
            </div>
            {/* Expense Summary */}
            <div>
                <h4>Expense</h4>
                <p className="expense-m">
                    $ {expense}
                </p>
            </div>
        </div>
    )
}