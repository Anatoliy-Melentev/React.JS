import { Reducer } from "react";
import { UPDATE_COMMENT, UpdateCommentAction } from "./actions";
import { CommentFormTextType } from "../reducer";

export const commentReducer: Reducer<CommentFormTextType, UpdateCommentAction> = (state, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
          ...state,
          [action.payload.id]: action.payload.text,
      };
    default:
      return state;
  }
}