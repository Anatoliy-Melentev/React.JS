import { Reducer } from "redux";
import {
  ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS,
  MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction
} from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import {
  SET_CLIENT_ID,
  SET_REDIRECT_URI,
  SET_TOKEN,
  SetClientIdAction,
  SetRedirectUriAction,
  SetTokenAction
} from "./token/actions";
import { tokenReducer } from "./token/reducer";
import { commentReducer } from "./comment/reducer";
import { UPDATE_COMMENT, UpdateCommentAction } from "./comment/actions";

export type CommentFormTextType = undefined | {
  [n: string]: string
};

export type RootState = {
  commentFormText?: CommentFormTextType;
  token?: string;
  client_id?: string;
  redirect_uri?: string;
  me: MeState;
};

const initialState: RootState = {
  commentFormText: {},
  token: '',
  client_id: '',
  redirect_uri: '',
  me: {
    loading: false,
    error: '',
    data: {
      name: 'Аноним',
      iconImg: '',
    },
  },
};

type Action = UpdateCommentAction
  | SetTokenAction
  | SetClientIdAction
  | SetRedirectUriAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const rootReducer: Reducer<RootState | undefined, Action> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return { ...state, commentFormText: commentReducer(state.commentFormText, action) };
    case SET_TOKEN:
      return { ...state, token: tokenReducer(state.token, action) };
    case SET_CLIENT_ID:
      return { ...state, client_id: tokenReducer(state.client_id, action) };
    case SET_REDIRECT_URI:
      return { ...state, redirect_uri: tokenReducer(state.redirect_uri, action) };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return { ...state, me: meReducer(state.me, action) };
    default:
      return state
  }

  return state;
}