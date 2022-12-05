import { AbstractControl } from '@angular/forms';

export default (
  control: AbstractControl,
): { isPasswordValid: string; } | null => {
  if (!(control.value as string)) {
    return { isPasswordValid: 'Please enter a password!' };
  }
  if (!/[A-Z]/.test(control.value as string)) {
    return {
      isPasswordValid: 'Password must contain lowercase and uppercase letters',
    };
  }
  if (!/[a-z]/.test(control.value as string)) {
    return {
      isPasswordValid: 'Password must contain lowercase and uppercase letters',
    };
  }
  if (!/[!"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]+/.test(control.value as string)) {
    return { isPasswordValid: 'Password must contain special characters' };
  }
  return null;
};
