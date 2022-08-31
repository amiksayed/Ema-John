const addToDb = (id) => {
    const shoppingCart= getStoredCart()
    
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart[id] = shoppingCart[id] + 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}

const getStoredCart = () => {
    let shoppingCart = {}
    const exists = JSON.parse(localStorage.getItem("shopping-cart"))
    if (exists) {
        shoppingCart = exists
    }
    return shoppingCart
}

const deleteCart=() => {
    localStorage.removeItem('shopping-cart')
}
export {
    addToDb, getStoredCart, deleteCart
}