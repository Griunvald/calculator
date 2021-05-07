import { mount } from 'enzyme';
import { findByTestAttr } from '../utils/testUtils';
import App from './App';

const setup = () => {
  return mount(<App />);
};

describe('App', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component).toHaveLength(1);
  });

  test('render display value 0', () => {
    const wrapper = setup();
    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('0');
  });
});

describe('Numeric keypad', () => {
  test('render button with value 1', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    expect(button).toHaveLength(1);
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

  test('clicking on the button twice after + operator appends 1 to 1', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const operatorButton = findByTestAttr(wrapper, 'button-plus');
    operatorButton.simulate('click');

    button.simulate('click');
    button.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('11');
  });

  test('1 + 1 = 2', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const operatorButton = findByTestAttr(wrapper, 'button-plus');
    operatorButton.simulate('click');

    button.simulate('click');

    const equalsButton = findByTestAttr(wrapper, 'button-equals');
    equalsButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('2');
  });

  test('clicking on . adds decimal point before number', () => {
    const wrapper = setup();
    const decimalButton = findByTestAttr(wrapper, 'decimal-point-button');
    decimalButton.simulate('click');

    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('0.1');
  });

  test('clicking on . appends decimal point to the number', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');

    button.simulate('click');

    const decimalButton = findByTestAttr(wrapper, 'decimal-point-button');
    decimalButton.simulate('click');

    button.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('1.1');
  });

  test('clicking on . twice not adds a second decimal point', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');

    button.simulate('click');

    const decimalButton = findByTestAttr(wrapper, 'decimal-point-button');
    decimalButton.simulate('click');
    decimalButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).not.toBe('1..');
  });
});

describe('Functional buttons', () => {
  test('clicking the AC button reset the display value to zero', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const acButton = findByTestAttr(wrapper, 'button-ac');
    acButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('0');
  });

  test('clicking the ± changes displayed number to negative', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const plusMinusButton = findByTestAttr(wrapper, 'plus-minus-button');
    plusMinusButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('-1');
  });
  test('clicking the % button show 1% of the initial value', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-1');
    button.simulate('click');

    const percentButton = findByTestAttr(wrapper, 'percent-button');
    percentButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('0.01');
  });
});

describe('Operator buttons', () => {
  test('clicking on + button show + sign on the display', () => {
    const wrapper = setup();
    const plusButton = findByTestAttr(wrapper, 'button-plus');
    plusButton.simulate('click');

    const display = findByTestAttr(wrapper, 'operator-display').text();
    expect(display).toBe('+');
  });

  test('2 - 1 = 1', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-2');
    button.simulate('click');

    const minusButton = findByTestAttr(wrapper, 'button-minus');
    minusButton.simulate('click');

    const button1 = findByTestAttr(wrapper, 'button-1');
    button1.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('1');
  });

  test('2 x 2 = 4', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-2');
    button.simulate('click');

    const multiplyButton = findByTestAttr(wrapper, 'button-multiply');
    multiplyButton.simulate('click');

    button.simulate('click');

    const equalsButton = findByTestAttr(wrapper, 'button-equals');
    equalsButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('4');
  });
  test('2 / 2 = 1', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'button-2');
    button.simulate('click');

    const multiplyButton = findByTestAttr(wrapper, 'button-divide');
    multiplyButton.simulate('click');

    button.simulate('click');

    const equalsButton = findByTestAttr(wrapper, 'button-equals');
    equalsButton.simulate('click');

    const display = findByTestAttr(wrapper, 'display').text();
    expect(display).toBe('1');
  });
});
