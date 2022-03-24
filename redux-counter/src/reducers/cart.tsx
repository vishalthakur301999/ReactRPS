const CartReducer = (state=0 , action: { type: any; }) => {
    switch(action.type) {
        case 'ADDITEM' :
            return state + 1;
        case 'REMOVEITEM': 
            return state - 1;
        default : {
            return state
        }        
    }
}
export default CartReducer