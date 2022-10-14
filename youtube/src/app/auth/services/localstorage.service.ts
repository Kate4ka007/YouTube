import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TOKENS } from '../models/token';
import getRandomNumber from '../models/random-function';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  tokens = TOKENS;

  private user = new BehaviorSubject('');

  userName = this.user.asObservable();

  setToketolokalStorage(): void {
    localStorage.setItem('token', this.tokens[this.getRandomIndex()]);
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomIndex(): number {
    return getRandomNumber(this.tokens.length - 1);
  }

  setUserNametoLocalStorage(userName: string) {
    localStorage.setItem('userName', userName);
  }

  /*   getUserName() {
    if (localStorage.getItem('userName')) {
      this.user = <string> localStorage.getItem('userName');
    }
    return '';
  } */

  updateUsers(user: string): void {
    this.user.next(user);
  }
}
