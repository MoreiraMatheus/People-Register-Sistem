export function validateUserRequiredFields(user){
  const requiredfields = ['name', 'age', 'gender', 'height']
  const userKeys = Object.keys(user)

  console.clear()
  if(!userKeys.includes(requiredfields[0])){
    console.log('nome não informado')
    return false
  }
  else if(!userKeys.includes(requiredfields[1])){
    console.log('idade não informada')
    return false
  }
  else if(!userKeys.includes(requiredfields[2])){
    console.log('genero não informado')
    return false
  }
  else if(!userKeys.includes(requiredfields[3])){
    console.log('altura não informada')
    return false
  }

  return true
}