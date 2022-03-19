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
      if (window.__token__) {
        dispatch(updateToken(String(window.__token__)));
      }
    }, [])
  },
  updateToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token,
  });