import * as React from "react";
import { createStore, applyMiddleware, Action } from "redux";
import { Provider } from "react-redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Post } from './shared/Post';

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./store/reducer";
import { saveToken } from "./store/token/actions";

import './main.global.sass';
import './variables.global.sass';
import { useState } from "react";
import { useMountEffect } from "./hooks/useMountEffect";
import { Navigate } from "react-router";
import { Error } from "./shared/Error";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)));

function AppComponent() {
  const [mounted, setMounted] = useState(false);

  useMountEffect(() => setMounted(true));
  store.dispatch(saveToken());
  return (
    <Provider store={store}>
      {mounted &&
        <BrowserRouter>
          <Layout >
            <Header />
            <Content>
              <Routes>
                <Route path="/"></Route>
                <Route path="auth" element={<Navigate to="/best" replace />}></Route>
                <Route path="posts" element={<CardsList link={'rising'} />}>
                  <Route path=":id" element={
                    <Post title={'Заголовок'} author={'Василий Пупкин'} score={123} date={'3 часа спустя'} />
                  }></Route>
                </Route>
                <Route path="best" element={<CardsList link={'best'} />}>
                  <Route path=":id" element={
                    <Post title={'Заголовок'} author={'Василий Пупкин'} score={123} date={'3 часа спустя'} />
                  }></Route>
                </Route>
                <Route path="error" element={<Error />}></Route>
                <Route path="/*" element={<Navigate to="/error" replace />}></Route>
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      }
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);
