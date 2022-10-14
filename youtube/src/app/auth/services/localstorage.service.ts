import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TOKENS } from '../models/token';
import getRandomNumber from '../models/random-function';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  tokens = TOKENS;

  private user = new BehaviorSubject('');

  userName = this.user.asObservable();

  constructor(private router: Router) { }

  setToketolokalStorage(): void {
    localStorage.setItem('token', this.tokens[this.getRandomIndex()]);
  }

  getRandomIndex(): number {
    return getRandomNumber(this.tokens.length - 1);
  }

  setUserNametoLocalStorage(userName: string) {
    localStorage.setItem('userName', userName);
  }

  getUserNameFromLocalStorage() {
    if (localStorage.getItem('userName')) {
      const user = localStorage.getItem('userName');
      if (user) {
        this.updateUsers(user);
        return user;
      }
    }
    return this.user;
  }

  updateUsers(user: string): void {
    this.user.next(user);
  }

  clearStorage() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
    this.updateUsers('');
  }
}
