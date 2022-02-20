/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount, render } from "enzyme";
import { Dropdown } from "../Dropdown";
import styles from "../../CardsList/Card/Menu/menu.sass";
import { SvgIcon } from "../../SvgIcon";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<Dropdown
        button={
          <button className={styles.menuButton}>
            <SvgIcon w={5} h={20} name='menu' />
          </button>
        }
        children={<div></div>}
      />);
    expect(wrapper).toBeDefined();
   // console.log(wrapper.find('div.container').debug())
    //console.log(window);
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (shapshot)', () => {
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);

      expect(wrapper).toMatchSnapshot()
  })
});