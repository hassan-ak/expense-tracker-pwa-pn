// React Imports
import React, { useContext } from 'react';
// Web animations Imports
import useWebAnimations, {flash} from "@wellyshen/use-web-animations";
// Functional Component Imports
import { GlobalContext } from "../functionalComponent/GlobalContext";

// Balance component Function
export const Balance = () => {
    // useWebAnimations
    const { ref } = useWebAnimations({...flash});
    // use GloablContext to fetch data
    const context = useContext(GlobalContext);
    // Extarct amounts from data
    const amounts = context.transactions.map(transaction => parseInt(transaction.amount));    
    // Sum of Income Amounts
    const total1 = Math.abs(amounts.reduce((acc,item)=>(acc+=item),0));
    const total = parseInt(total1.toFixed(2));
    // Determine while total amount is +ve or -ve
    const sign1 = amounts.reduce((acc,item)=>(acc+=item),0);
    const sign = sign1 < 0 ?  '-' : '';
    return (
        // Balance Container
        <div className="balance">
            {/* Section Heading */}
            <h4>Balance</h4>
            {/* Balance Amount */}
            <h1>
                <span>{sign}</span>
                <span ref={ref}>${total}</span>
            </h1>
        </div>
    )
}