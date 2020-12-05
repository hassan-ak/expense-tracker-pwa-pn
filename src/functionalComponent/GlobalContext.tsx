// React Imports
import { createContext } from 'react';

//Functional Component Imports
import {initialState} from './InitialState';

// Create Context
export const GlobalContext = createContext(initialState);