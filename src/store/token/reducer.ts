import { Reducer } from "react";
import {
  SET_CLIENT_ID,
  SET_REDIRECT_URI,
  SET_TOKEN,
  SetClientIdAction,
  SetRedirectUriAction,
  SetTokenAction
} from "../token/actions";

type Action = SetTokenAction | SetClientIdAction | SetRedirectUriAction;


export const tokenReducer: Reducer<string | undefined, Action> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
    case SET_CLIENT_ID:
    case SET_REDIRECT_URI:
      return action.payload;
    default:
      return state;
  }
}