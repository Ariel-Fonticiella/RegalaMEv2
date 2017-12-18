import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from '../services/user-api.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(
    private userThang: UserApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

}