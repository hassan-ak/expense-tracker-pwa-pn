// Reducer Component
export const AppReducer = (state:any,action:any)=>{
    switch (action.type) {
        case 'delete':
            return{
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        case 'add':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}