import { IAuth } from 'state/interfaces';

export function getStorage(textDataStorage: string): IAuth | false {
  const storage = localStorage.getItem(textDataStorage);
  if (storage) {
    return JSON.parse(storage);
  } else return false;
}
