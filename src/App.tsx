import * as React from "react";
import { hot } from 'react-hot-loader/root';

import { useToken } from "./hooks/useToken";

import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

import './main.global.sass';
import './variables.global.sass';
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./store/store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout token={token} >
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);