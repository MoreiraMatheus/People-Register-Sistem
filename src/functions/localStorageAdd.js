import { localStorageQuery } from "./localStorageQuery"

export function localStorageAdd(key, object){
  try{
    const currentLocalStorageObject = localStorageQuery(key)
    
    currentLocalStorageObject.push(object)

    const newObjectJson = JSON.stringify(currentLocalStorageObject)

    localStorage.setItem(key, newObjectJson)
  }
  catch(erro){
    console.log('tivemos um erro inesperado:\n', erro.name, erro.message)
  }
}