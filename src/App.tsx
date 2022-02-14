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

import './variables.global.sass';
import './main.global.sass';

const LIST = [
  { As: 'li' as const, text: 'some' },
  { As: 'li' as const, text: 'other some' },
  { As: 'li' as const, text: 'some' }
].map(generateId);

function AppComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  //const [isVisible] = useIsMounted()
  const [list, setList] = React.useState(LIST);
  const handleItemClick = (id: string) => setList(list.filter(item => item.id !== id));
  const handleAdd = () => setList(list.concat(generateId({ As: 'li' as const, text: generateRandomString() })))

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
        <input type="text" onChange={getValue(setTitle)}/>
        {isVisible && <MyHooks title={title} id='11' />}

        {/*<MyList list={LIST} onClick={console.log} />*/}
        <button onClick={handleAdd} type='button'>Add El</button>
        <ul>
          <GenericList list={list.map(merge({ onClick: handleItemClick }))}/>
        </ul>
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />);