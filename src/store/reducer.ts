import { ActionCreator, AnyAction, Reducer } from "redux";
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction, MeRequestErrorAction,
  MeRequestSuccessAction
} from "./me/actions";
import { meReducer, MeState } from "./me/reducer";

export type CommentTextType = undefined | {
  [n: string]: string
};

export type RootState = {
  commentText?: CommentTextType;
  token?: string;
  me: MeState;
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  payload: { id: string; text: string; };
}

export const updateComment: ActionCreator<UpdateCommentAction> = (id: string, text: string) => ({
  type: UPDATE_COMMENT,
  payload: { id: id, text: text },
});

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN;
  payload: string;
}
export const updateToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});

const initialState: RootState = {
  commentText: {},
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
      return {
        ...state,
        commentText: {
          ...state.commentText,
          [action.payload.id]: action.payload.text,
        },
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      };
    default:
      return state
  }

  return state;
}