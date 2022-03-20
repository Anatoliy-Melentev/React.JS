import * as React from "react";
import { createStore, applyMiddleware, Action } from "redux";
import { Provider } from "react-redux";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { hot } from 'react-hot-loader/root';

import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./store/reducer";
import { saveToken } from "./store/token/actions";

import './main.global.sass';
import './variables.global.sass';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, Action>)));

function AppComponent() {
  store.dispatch(saveToken());
  return (
    <Provider store={store}>
      <Layout >
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  )
}

export const App = hot(() => <AppComponent />);