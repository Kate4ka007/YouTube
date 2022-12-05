import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl): { [key: string]: string } | null => {
  const pattern = new RegExp('^(https?:\\/\\/)?'
  + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'
  + '((\\d{1,3}\\.){3}\\d{1,3}))'
  + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'
  + '(\\?[;&a-z\\d%_.~+=-]*)?'
  + '(\\#[-a-z\\d_]*)?$', 'i');
  if (!(control.value as string)) {
    return { isLinkValid: 'Please enter a link to the video!' };
  }
  if (!pattern.test(control.value)) {
    return { isLinkValid: 'The video link is invalid' };
  }
  return null;
};
