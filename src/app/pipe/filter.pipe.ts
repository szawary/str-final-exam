import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[] | null, keyWord: string): User[] {
    if(value === null){
      return [];
    }
    const keyWordLowerCase = keyWord.toLocaleLowerCase();

    return value.filter((user: User) => {
      const userNameLowerCase = user.name.toLocaleLowerCase();
      return userNameLowerCase.includes(keyWordLowerCase);
    })


  }

}
