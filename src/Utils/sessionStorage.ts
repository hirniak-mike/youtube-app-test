export const saveToStorage = (name: string, data: any) => {
  if (!window?.localStorage) {
    return;
  }
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name: string) => {
  if (!window?.localStorage) {
    return null;
  }
  try {
    return JSON.parse(window.localStorage.getItem(name) || '');
  } catch {
    return null;
  }
};

export const removeFromStorage = (name: string) => {
  if (!window?.localStorage) {
    return null;
  }
  try {
    window.localStorage.removeItem(name);
  } catch {
    return null;
  }
};