import { Reducer } from "redux";
import {
  ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS,
  MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction
} from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SET_TOKEN, SetTokenAction } from "./token/actions";
import { tokenReducer } from "./token/reducer";
import { commentReducer } from "./comment/reducer";
import { UPDATE_COMMENT, UpdateCommentAction } from "./comment/actions";

export type CommentFormTextType = undefined | {
  [n: string]: string
};

export type RootState = {
  commentFormText?: CommentFormTextType;
  token?: string;
  me: MeState;
};

const initialState: RootState = {
  commentFormText: {},
  token: '',
  me: {
    loading: false,
    error: '',
    data: {
      name: 'Аноним',
      iconImg: '',
    },
  },
};

type Action = UpdateCommentAction | SetTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;

export const rootReducer: Reducer<RootState | undefined, Action> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return { ...state, commentFormText: commentReducer(state.commentFormText, action) };
    case SET_TOKEN:
      return { ...state, token: tokenReducer(state.token, action) };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return { ...state, me: meReducer(state.me, action) };
    default:
      return state
  }

  return state;
}