import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/utils/services/app.service';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;

  constructor(
      private appService: AppService,
      private authService : AuthService
    ) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null)
    });
  }

  logout() {
    this.authService.SignOut();
  }
}
