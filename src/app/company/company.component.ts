import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { Observable } from 'rxjs/Observable';
import * as companyActions from './store'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private companies$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

}
