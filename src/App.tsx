import * as React from "react";
import { useToken } from "./hooks/useToken";
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

import './variables.global.sass';
import './main.global.sass';
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { useState } from "react";
import { commentContext } from "./shared/context/commentContext";

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');
  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  )
}

export const App = hot(() => <AppComponent />);