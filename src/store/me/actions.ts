import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";

export const
  ME_REQUEST = 'ME_REQUEST',
  ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS',
  ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export interface IUserData {
  name: string;
  iconImg: string;
};
export type MeRequestAction = {
  type: typeof ME_REQUEST;
};
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error:  string;
};

export const
  meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST,
  }),
  meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS, data,
  }),
  meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR, error
  }),
  meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `bearer ${getState().token}` }
      })
      .then(resp => dispatch(meRequestSuccess({
        name: resp.data.name, iconImg: resp.data.snoovatar_img
      })))
      .catch(error => dispatch(meRequestError(String(error))));
  };