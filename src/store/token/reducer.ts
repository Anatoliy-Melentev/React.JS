import { Reducer } from "react";
import { SET_TOKEN, SetTokenAction } from "../token/actions";

export const tokenReducer: Reducer<string | undefined, SetTokenAction> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}