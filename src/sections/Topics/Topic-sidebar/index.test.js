
import React from 'react';
import { shallow } from 'enzyme';
import SeideBar from './index';
it('Topic-sidebar renders without crashing', () => {
  shallow(<SeideBar />);
});