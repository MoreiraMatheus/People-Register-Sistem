import { localStorageQuery } from "./localStorageQuery";

export function deleteUserByID(id){
  const currentLocalStorage = localStorageQuery('pessoas')

  const userWillBeDeleted = currentLocalStorage.find(user => user.id === id)

  const newUsersArray = currentLocalStorage.filter(user => user != userWillBeDeleted)

  const newUsersArrayJson = JSON.stringify(newUsersArray)

  localStorage.setItem('pessoas', newUsersArrayJson)
}