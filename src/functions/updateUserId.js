export function updateUserId(objectList){
  const newArray = []
  for (let i = 0; i < objectList.length; i++) {
    objectList[i].id = i + 1
    newArray.push(objectList[i])
  }
  return newArray
}