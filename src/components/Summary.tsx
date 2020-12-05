// React Imports
import React from 'react';

// Summary component Function
export const Summary = () => {
    return (
        // Summary Container
        <div className="income-expense">
            {/* Income Summary */}
            <div>
                <h4>Income</h4>
                <p className="income-m">
                    $ 0.00
                </p>
            </div>
            {/* Expense Summary */}
            <div>
                <h4>Expense</h4>
                <p className="expense-m">
                    $ 0.00
                </p>
            </div>
        </div>
    )
}