import * as userImages from './importImages';

export function userImageSelector(gender, age){
  if(gender === 'M'){
    if(age < 18){
      return userImages.boy
    }
    else{
      return age < 60 ? userImages.man : userImages.grandfather
    }
  }
  else if(gender === 'F'){
    if(age < 18){
      return userImages.girl
    }
    else{
      return age < 60 ? userImages.woman : userImages.grandmother
    }
  }
  else{
    return userImages.boy
  }
}