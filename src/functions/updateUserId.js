export function updateUserId(objectList){
  const newArray = []
  const length = objectList.length
  for (let i = 0; i < length; i++) {
    objectList[i].id = i + 1
    newArray.push(objectList[i])
  }
  return newArray
}