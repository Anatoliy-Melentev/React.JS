import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { getValue } from './utils/react/pickFromSyntheticEvent';

import { MyHooks, useIsMounted } from './HooksExample';
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";

import './variables.global.sass';
import './main.global.sass';

const LIST = [{ As: 'li' as const, text: 'some' }, { As: 'li' as const, text: 'other some' }].map(generateId);

function AppComponent() {
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => setList(list.filter(item => item.id !== id));

  return (
    <Layout>
      <Header />
      <Content>
        <Dropdown onOpen={() => console.log('open')} onClose={() => console.log('close')} isOpen={false} button={<button>Test</button>}>
          <ul>
            <GenericList list={list.map(merge({ onClick: handleItemClick }))}/>
          </ul>
        </Dropdown>
        <CardsList />
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />);