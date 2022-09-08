import * as userImages from '../services/importImages';

export function userImageSelector(gender, age){
  if(gender === 'M'){
    if(age < 18){
      return userImages.boy
    }
    else{
      return age < 60 ? userImages.man : userImages.grandfather
    }
  }
  else{
    if(age < 18){
      return userImages.girl
    }
    else{
      return age < 60 ? userImages.woman : userImages.grandmother
    }
  }
}