import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"
export const addToCart = (data) => {
    console.warn("action addToCart", data)
    return {
        type: ADD_TO_CART,
        data
    }
}


export const removeFromCart = (data) => {
    console.warn("action removeFromCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}


export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}