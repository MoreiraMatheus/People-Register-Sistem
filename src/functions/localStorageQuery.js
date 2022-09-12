export function localStorageQuery(key){
  const localStorageQuery = localStorage.getItem(key)

  return JSON.parse(localStorageQuery)
}