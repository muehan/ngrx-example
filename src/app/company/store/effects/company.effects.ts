import { Injectable } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { Effect, Actions } from '@ngrx/effects';
import * as companyActions from './../actions';

import 'rxjs/add/operator/switchMap';

@Injectable()
export class CompanyEffects {

    constructor(
        private companyService: CompanyService,
        private actions$: Actions
    ) { }

    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => this.companyService.loadCompanies()
            .map(companies => (new companyActions.LoadCompaniesSuccessAction(companies)))
        );
}