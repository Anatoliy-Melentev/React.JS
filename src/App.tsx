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

import { createStore, applyMiddleware, Middleware, Action } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, updateToken } from "./store/reducer";
import thunk, { ThunkAction } from 'redux-thunk';
import { useEffect } from "react";

// const ping: Middleware = (store) => (next) => (action) => {
//   console.log('ping');
//   next(action);
// };
// const pong: Middleware = (store) => (next) => (action) => {
//   console.log('pong');
//   next(action);
// };

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch({ type: 'START'});
  setTimeout(() => dispatch({ type: 'FINISH'}), ms);

}

function AppComponent() {
  useEffect(() => {
    const token = window.__token__;
    store.dispatch(updateToken(token));
    // @ts-ignore
    store.dispatch(timeout(3000));
    if (token?.length) {
      localStorage.setItem('token', token);
    }
  }, [])
  return (
    <Provider store={store}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout >
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