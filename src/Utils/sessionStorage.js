export const saveToStorage = (name, data) => {
  if (!window?.localStorage) {
    return;
  }
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name) => {
  if (!window?.localStorage) {
    return null;
  }
  try {
    return JSON.parse(window.localStorage.getItem(name));
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const removeFromStorage = (name) => {
  if (!window?.localStorage) {
    return null;
  }
  try {
    window.localStorage.removeItem(name);
  } catch (e) {
    console.error(e);
    return null;
  }
}