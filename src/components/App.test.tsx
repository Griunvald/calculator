import { mount } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import App from './App';

const setup = () => {
  return mount(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component).toHaveLength(1);
});

test('render button with value 1', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'button-1');
  expect(button).toHaveLength(1);
});

test('render display value 0', () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, 'display').text();
  expect(display).toBe('0');
});

test('clicking on the button changes display value to 1', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'button-1');

  button.simulate('click');

  const display = findByTestAttr(wrapper, 'display').text();
  expect(display).toBe('1');
});

test('clicking on the button twice appends 1 to 1', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'button-1');

  button.simulate('click');
  button.simulate('click');

  const display = findByTestAttr(wrapper, 'display').text();
  expect(display).toBe('11');
});
