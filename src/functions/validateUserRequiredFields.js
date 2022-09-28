export function validateUserRequiredFields(user){
  const requiredfields = ['name', 'age', 'gender', 'height']
  const userKeys = Object.keys(user)

  if(!userKeys.includes(requiredfields[0])){
    return false
  }
  else if(!userKeys.includes(requiredfields[1])){
    return false
  }
  else if(!userKeys.includes(requiredfields[2])){
    return false
  }
  else if(!userKeys.includes(requiredfields[3])){
    return false
  }

  return true
}