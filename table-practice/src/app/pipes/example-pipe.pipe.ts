import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe'
})
export class ExamplePipePipe implements PipeTransform {

  transform(dob: string): number {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear()-birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      return age - 1;
    }

    return age;
  }
} 
