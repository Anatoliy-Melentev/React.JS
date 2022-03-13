import React from "react";

type CommentContextType = {
  value: { [n: string]: string };
  onChange: (value: { [n: string]: string }) => void;
}

export const commentContext = React.createContext<CommentContextType>({
  value: {
    '0': '',
  },
  onChange: () => {},
});