export const createStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const getStorage = key => {
  try {
    const serializedState = window.localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const removeStorage = key => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
