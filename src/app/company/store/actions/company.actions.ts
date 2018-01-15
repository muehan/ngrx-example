import { Action } from '@ngrx/store';
import { Company } from '../../../models';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

export class LoadCompaniesAction implements Action {
    readonly type = LOAD_COMPANIES;

    constructor() { }
}

export class LoadCompaniesSucessAction implements Action {
    readonly type = LOAD_COMPANIES_SUCCESS;

    constructor(public payload: Company[]) { }
}

export type Action = LoadCompaniesAction | LoadCompaniesSucessAction;