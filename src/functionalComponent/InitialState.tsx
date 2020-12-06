export type Transaction = {
    id:number, 
    description:string, 
    amount:string,
};
export interface TransactionStore{
    transactions: Transaction[];
}
// Initial Data
export const initialState = {
    transactions:[
        {id:1, description:"Transaction", amount:'0'},
    ],
    deleteTransaction: (id: number) => { },
    addTransaction: (transaction: Transaction) => { },
}