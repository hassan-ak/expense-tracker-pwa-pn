// Reducer Component
export const AppReducer = (state:any,action:any)=>{
    switch (action.type) {
        case 'delete':
            return{
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
    }
}