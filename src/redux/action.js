import { ITEM_ADD, ITEM_REMOVE } from "./ActionType"

export const addItem = (payload) =>{
  return{
      type : ITEM_ADD,
      payload : payload
  };
};

export const removeItem = payload =>{
    return{
        type:ITEM_REMOVE,
        payload:payload
    };
};