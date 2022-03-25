import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { useEffect } from "react";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  payload: string;
}

export const
  saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect(() => {
      const token = window.__token__;
      if (token && token?.length > 10 && token != 'undefined') {
        dispatch(updateToken(token));
      }
    }, [])
  },
  updateToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token,
  });