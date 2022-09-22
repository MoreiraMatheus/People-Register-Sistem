import { localStorageQuery } from "./localStorageQuery"
import { updateUserId } from "./updateUserId"

export function localStorageAdd(key, object){
  try{
    const currentLocalStorageObject = localStorageQuery(key)
    
    currentLocalStorageObject.push(object)

    const newObject = updateUserId(currentLocalStorageObject)

    const newObjectJson = JSON.stringify(newObject)

    localStorage.setItem(key, newObjectJson)
  }
  catch(erro){
    console.log('tivemos um erro inesperado:\n', erro.name, erro.message)
  }
}