// React Imports
import React, { useReducer } from 'react';

// Functional Component Imports
import { AppReducer } from './AppReducer';
import {GlobalContext} from './GlobalContext';
import { initialState } from './InitialState';

// Provider Component
export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider
            value = {{transactions: state.transactions,
                    }}>
            {children}
        </GlobalContext.Provider>
    )
}