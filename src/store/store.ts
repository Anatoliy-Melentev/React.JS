import { ActionCreator, AnyAction, Reducer } from "redux";

const initialState: RootState = {};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type CommentTextType = undefined | {
  [n: string]: string
};

export type RootState = {
  commentText?: CommentTextType;
  token?: string;
};

export const updateComment: ActionCreator<AnyAction> = (id, text) => ({
  type: UPDATE_COMMENT,
  payload: { id: id, text: text },
});

export const updateToken: ActionCreator<AnyAction> = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const rootReducer: Reducer<RootState | undefined> = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: {
          ...state.commentText,
          [payload.id]: payload.text,
        },
      }
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      }
    default:
      return state
  }
  return state;
}