import {
  Component, OnInit,
} from '@angular/core';
import { LocalstorageService } from 'src/app/auth/services/localstorage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = '';

  constructor(private localstorageService: LocalstorageService) {

  }

  ngOnInit(): void {
    this.localstorageService.userName.subscribe((user) => { this.user = user; });
  }
}
