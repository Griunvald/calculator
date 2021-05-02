export const findByTestAttr = (wrapper: any, value: string)  => {
  return wrapper.find(`[data-test='${value}']`);
};

