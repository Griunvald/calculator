import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import App from './App';

const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component).toHaveLength(1);
});
