import React from 'react';
import { usePostsData } from "../../hooks/usePostsData";

interface IPostsContextData {
  [n: number]: string | number;
}

export const postsContext = React.createContext<IPostsContextData>({});

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const
    [data] = usePostsData(),
    { Provider } = postsContext;

  return (
    <Provider value={data}>
      {children}
    </Provider>
  );
}