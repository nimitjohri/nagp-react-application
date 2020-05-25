import { ADD_ITEM_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM, CHECKOUT_CART_SUCCESS } from "../actions/cartAction";

const CART_INITIAL_STATE = {
  itemsAdded: [],
  total: 0,
};



const cartReducers = (state=CART_INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART:
      console.log('add item cart reducer')
      let addedItem = action.product
      let existedItem = state.itemsAdded.find(item => item.id === addedItem.id)
      if (existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          product: action.product,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;

        let newTotal = (state.total + addedItem.price);

      return {
        ...state,
        id: action.id,
        product: action.product,
        itemsAdded: [...state.itemsAdded, addedItem],
        total: newTotal
      }
    }
    case REMOVE_ITEM:
      console.log('remove item from cart')
      let itemToRemove = state.itemsAdded.find(item => item.id === action.id)
      let newItems = state.itemsAdded.filter(item=> action.id !== item.id)

      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return {
        ...state,
        itemsAdded: newItems,
        total: newTotal
      }
    case ADD_QUANTITY:
      console.log('add item from cart')
      let itemToAdd = state.itemsAdded.find(item => item.id === action.id)
      itemToAdd.quantity +=1
      let newTotalAfterAdd = state.total + itemToAdd.price
      return {
        ...state,
        total: newTotalAfterAdd
      }
    case SUB_QUANTITY:
      console.log('sub item from cart')
      let itemToSub = state.itemsAdded.find(item => item.id === action.id)
      
      if (itemToSub.quantity === 1) {
        let new_items = state.itemsAdded.filter(item=>item.id !== action.id)
        let newTotal = state.total - itemToSub.price
        return {
            ...state,
            itemsAdded: new_items,
            total: newTotal
          }
        } else {
          itemToSub.quantity -=1
          let newTotal = state.total - itemToSub.price
          return {
            ...state,
            total: newTotal
          }
        }
    case CHECKOUT_CART_SUCCESS:
      return {
        ...state,
        itemsAdded: [],
        total: 0
      }

    default:
      return state
  }
}

export default cartReducers;
