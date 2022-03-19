import { ActionCreator } from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  payload: {
    id: string;
    text: string;
  };
}

export const updateComment: ActionCreator<UpdateCommentAction> = (id: string, text: string) => ({
  type: UPDATE_COMMENT,
  payload: {
    id: id,
    text: text
  },
});