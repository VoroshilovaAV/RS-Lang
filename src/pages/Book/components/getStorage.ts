export function getStorage(textDataStorage: string) {
  const storage = localStorage.getItem(textDataStorage);
  if (storage) {
    return JSON.parse(storage);
  } else return false;
}
