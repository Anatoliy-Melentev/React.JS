import { hot } from 'react-hot-loader/root';
import * as React from "react";
import './variables.global.sass';
import './main.global.sass';
import { Header } from './shared/Header';
import { Content } from "./shared/Content";
import { Layout } from './shared/Layout';
import { CardsList } from "./shared/CardsList";

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}

export const App = hot(AppComponent);