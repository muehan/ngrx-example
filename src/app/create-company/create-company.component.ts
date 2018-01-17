import { Component, OnInit } from '@angular/core';
import { Company } from '../models/index';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import * as companyActions from './../store'

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  public companyName: string;
  public companyEmail: string;
  public companyPhone: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  public createCompany(event) {
    event.preventDefault();
    var company: Company = {
      id: -1,
      name: this.companyName,
      email: this.companyEmail,
      phone: this.companyPhone
    }

    this.companyName = "";
    this.companyEmail = "";
    this.companyPhone = null;

    this.store.dispatch(new companyActions.CreateCompanyAction(company));
  }
}
