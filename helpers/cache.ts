import store from 'memory-cache';

const cache = (key: string, data: any) => {
  let cachedValue = store.get(key);

  if (!cachedValue) {
    const value = data();
    store.put(key, value);

    return value;
  }

  return cachedValue;
}

export { cache }
