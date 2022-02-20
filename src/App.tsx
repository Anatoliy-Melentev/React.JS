import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { Ecolor, Text } from './shared/Text';

import './variables.global.sass';
import './main.global.sass';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br/>
        <Text size={20} color={Ecolor.green}>Label1</Text>
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />);