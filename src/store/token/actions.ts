import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import { useEffect } from "react";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  payload: string;
}
export const SET_CLIENT_ID = 'SET_CLIENT_ID';
export type SetClientIdAction = {
  type: typeof SET_CLIENT_ID;
  payload: string;
}
export const SET_REDIRECT_URI = 'SET_REDIRECT_URI';
export type SetRedirectUriAction = {
  type: typeof SET_REDIRECT_URI;
  payload: string;
}

export const
  saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    useEffect(() => {
      const token = window.__token__;
      const client_id = window.__client_id__;
      const redirect_uri = window.__redirect_uri__;

      if (token && token?.length > 10 && token != 'undefined') {
        dispatch(updateToken(token));
      }
      if (client_id && client_id?.length > 10 && client_id != 'undefined') {
        dispatch(updateClientId(client_id));
      }
      if (redirect_uri && redirect_uri?.length > 10 && redirect_uri != 'undefined') {
        dispatch(updateRedirectUri(redirect_uri));
      }
    }, [])
  },
  updateToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    payload: token,
  }),
  updateClientId: ActionCreator<SetClientIdAction> = (client_id: string) => ({
    type: SET_CLIENT_ID,
    payload: client_id,
  }),
  updateRedirectUri: ActionCreator<SetRedirectUriAction> = (redirect_uri: string) => ({
    type: SET_REDIRECT_URI,
    payload: redirect_uri,
  });