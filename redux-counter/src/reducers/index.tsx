import CounterReducer from "./counter";
import { combineReducers} from "redux";
import CartReducer from "./cart";

const AllReducers = combineReducers ({
    counter: CounterReducer,
    cart: CartReducer
})

export default AllReducers