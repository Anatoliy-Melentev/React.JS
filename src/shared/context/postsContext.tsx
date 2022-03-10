import React from 'react';
import { usePostsData } from "../../hooks/usePostsData";

interface IPostsContextData {
  data?: {
    children: Array<object>;
    [n: string]: string | null | number | Array<object>;
  };
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const
    [data] = usePostsData(),
    { Provider } = postsContext;

  return (
    <Provider value={data.data}>
      {children}
    </Provider>
  );
}