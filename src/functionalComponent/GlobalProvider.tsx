// React Imports
import React, { useReducer } from 'react';

// Functional Component Imports
import { AppReducer } from './AppReducer';
import {GlobalContext} from './GlobalContext';
import { initialState } from './InitialState';

// Provider Component
export const GlobalProvider: React.FC = ({children}) => {
    //Use reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //Actions
    //Delete Function
    function deleteTransaction(id: number) {
        dispatch({
            type: "delete",
            payload: id,
        });    
        //Add Function
    }
    function addTransaction(transaction: any) {
        dispatch({
            type: 'add',
            payload: transaction,
        })
    };

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}