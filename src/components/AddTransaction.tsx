// React Imports
import React, {useState, useContext} from 'react';
// Functional Component Imports
import {GlobalContext} from '../functionalComponent/GlobalContext';

// Add transaction component Function
export const AddTransaction = () => {
    // Define UseState
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState('')
    // for styling of error message
    const [desStyle,setDesStyle] = useState("smallSuccess");
    const [amStyle,setAmStyle] = useState("smallSuccess");
    // UseContext
    const context = useContext(GlobalContext)
    // function for adding new transaction
    const addNewTransaction=(a)=>{    
        // create new transaction
        const newTransaction = { 
            id: Math.floor(Math.random()*10000000000),
            description,
            amount: `${(Math.abs(+amount))*a}`
        }
        //Check for empty entry
        if ((typeof description == 'undefined' || typeof amount == 'undefined')
            ||(description.length === 0)||(amount.length === 0)) 
            {}
        else 
            {
            context.addTransaction(newTransaction);    
            // empty out input form after submit
            setTimeout(() => {
                setDescription('');
                setAmount('');
            }, 30);
        }
    }
    // Function for checking Error Message Style
    //for description message
    const checkDesStyle = ()=>{
        if (typeof description == 'undefined' || description.length === 0){
            setDesStyle("smallError")
        } else {
            setDesStyle("smallSuccess")
        }
    }
    // for amount message
    const checkAmsStyle = ()=>{
        if (typeof amount == 'undefined' || amount.length === 0){
            setAmStyle("smallError")
        }else{
            setAmStyle("smallSuccess")
        }
    }
    // onSubmit functions
    const onSubmit = (e) => {
        e.preventDefault();
        checkDesStyle();
        checkAmsStyle();
    }
    return (
        // Add-Transaction Container
        <div className="addTransaction">
            {/* Heading */}
            <h3>
                Add Transactions
            </h3>
            {/* Form for adding Transactions */}
            <form onSubmit={onSubmit}>
                {/* div for new Transaction Description */}
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            placeholder="Enter Description"
                            value={description}
                            onChange = {(e)=>{setDescription(e.target.value)}}
                    />
                    <small className={desStyle}>
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
                            placeholder="Enter Amount"
                            value={amount}
                            onChange = {(e)=>{setAmount(e.target.value)}}
                    />
                    <small className={amStyle}>
                        Kindly Enter Amount
                    </small>
                </div>
                {/* Buttons for Adding new Transactions */}
                <div className="btn">
                    <button className="add-income" onClick={(a)=>addNewTransaction(1)}> 
                        Add Income
                    </button>
                    <button className="add-expense" onClick={(a)=>addNewTransaction(-1)}> 
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
} 