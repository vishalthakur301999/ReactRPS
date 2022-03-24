import { useDispatch, useSelector } from 'react-redux';
import { AddItem, RemoveItem } from '../actions';

export default function DisplayCart() {
    // @ts-ignore
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div >
            <h1>Cart Value : {cart}</h1>
            <button onClick={() => dispatch(AddItem())}> add product</button>
            <button onClick={() => dispatch(RemoveItem())}>Remove product</button>
        </div>
    )
}
