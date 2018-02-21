import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  // TODO: implement transform function
  transform(value: string, badWords: string): string {
    let badWordsList = badWords.split(/\s*,\s*/);
    console.log(badWordsList);
    // for (let bw of badWordsList) {
    //   value = value.replace(bw, "$%#@!");
    // }
    // return value;

    return badWordsList.reduce((s, badWord) => s.replace(badWord, "$%#@!"), value);
  }

}
