import * as types from "../constants/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var index = -1;
  var { product, quantity, item, plusOrminus } = action;

  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
      
    case types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        console.log("hi")
        state.splice(index, 1)
      }
      return [...state]

    case types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, item.product);
      if(index !== -1) {
        //Neu tra tru ve khong thi xoa khoi gio hang luon
        if(state[index].quantity + plusOrminus === 0){
          state.splice(index, 1)
        }
        else
        {
          state[index].quantity += plusOrminus;
        }
      }
      return [...state]
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
