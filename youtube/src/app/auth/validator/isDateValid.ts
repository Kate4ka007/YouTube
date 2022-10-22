import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: string } | null => {
  const date = new Date().getTime();
  const setDate = new Date(control.value).getTime();
  if ((date < setDate)) {
    return { isDateValid: 'The date is invalid' };
  }
  return null;
};
