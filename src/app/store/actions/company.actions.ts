import { Action } from '@ngrx/store';
import { Company } from '../../models';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const CREATE_COMPANY = 'CREATE_COMPANY';
export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';


export class LoadCompaniesAction implements Action {
    readonly type = LOAD_COMPANIES;

    constructor() { }
}

export class LoadCompaniesSuccessAction implements Action {
    readonly type = LOAD_COMPANIES_SUCCESS;

    constructor(public payload: Company[]) { }
}

export class DeleteCompanyAction implements Action {
    readonly type = DELETE_COMPANY;

    constructor(public payload: number) { }
}

export class DeleteCompanySuccessAction implements Action {
    readonly type = DELETE_COMPANY_SUCCESS

    constructor(public payload: number) { }
}

export class CreateCompanyAction implements Action {
    readonly type = CREATE_COMPANY;

    constructor(public payload: Company){}
}

export class CreateCompanySuccessAction implements Action {
    readonly type = CREATE_COMPANY_SUCCESS;

    constructor(public payload: Company){};
}

export type Action
    = LoadCompaniesAction
    | LoadCompaniesSuccessAction
    | DeleteCompanyAction
    | DeleteCompanySuccessAction
    | CreateCompanyAction
    | CreateCompanySuccessAction;