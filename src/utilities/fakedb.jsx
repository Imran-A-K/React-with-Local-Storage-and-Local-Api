//using local storage to manage cart data

const addToDb = id =>{

    let shoppingCart = {};
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
// adding quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity +1
        shoppingCart[id] = newQuantity

        // localStorage.setItem(id,newQuantity)
    }
    else{
        shoppingCart[id] = 1
        // localStorage.setItem(id,1);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

}
const removeFromDb = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
    }

}
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}
const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer,0);
    return total;
}
export {addToDb,
    removeFromDb,
deleteShoppingCart,
getTotalPrice as getTotal}