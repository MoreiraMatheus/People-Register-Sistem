import { localStorageQuery } from "./localStorageQuery";

export function deleteUserByID(id){
  const currentLocalStorage = localStorageQuery('pessoas')

  console.log('id user: \n', id)
  console.log(currentLocalStorage)
}