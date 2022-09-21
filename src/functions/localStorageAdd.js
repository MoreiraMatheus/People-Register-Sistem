import { localStorageQuery } from "./localStorageQuery"

export function localStorageAdd(key, object){
  try{
    // pegar o localStorage atual
    const currentLocalStorageObject = localStorageQuery(key)
    
    //adicionar o objeto novo
    currentLocalStorageObject.push(object)

    // tranformar os dados em json
    const newObjectJson = JSON.stringify(currentLocalStorageObject)

    // adicionar no localStorage
    localStorage.setItem(key, newObjectJson)
  }
  catch(erro){
    console.log('tivemos um erro inesperado:\n', erro.name, erro.message)
  }
}