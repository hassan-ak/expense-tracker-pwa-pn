// React Imports
import React from 'react';

// Add transaction component Function
export const AddTransaction = () => {
    return (
        // Add-Transaction Container
        <div className="addTransaction">
            {/* Heading */}
            <h3>
                Add Transactions
            </h3>
            {/* Form for adding Transactions */}
            <form>
                {/* div for new Transaction Description */}
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            placeholder="Enter Description"/>
                    <small>
                        Kindly Enter Description
                    </small>
                </div>
                {/* div for new Transaction Amount */}
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input  type="number"
                            step="0.00000000001" 
                            placeholder="Enter Amount"/>
                    <small>
                        Kindly Enter Amount
                    </small>
                </div>
                {/* Buttons for Adding new Transactions */}
                <div className="btn">
                    <button className="add-income"> 
                        Add Income
                    </button>
                    <button className="add-expense">
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
}