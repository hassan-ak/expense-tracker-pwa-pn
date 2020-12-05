// React Imports
import React from 'react';
// Web animations Imports
import useWebAnimations, {flash} from "@wellyshen/use-web-animations";

// Balance component Function
export const Balance = () => {
    // useWebAnimations
    const { ref } = useWebAnimations({...flash});
    return (
        // Balance Container
        <div className="balance">
            {/* Section Heading */}
            <h4>Balance</h4>
            {/* Balance Amount */}
            <h1>
                <span>-</span>
                <span ref={ref}>$100</span>
            </h1>
        </div>
    )
}