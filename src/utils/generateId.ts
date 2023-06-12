export const generateId = (pre: string) => {
  return `${pre}-${new Date().getTime()}`;
};
