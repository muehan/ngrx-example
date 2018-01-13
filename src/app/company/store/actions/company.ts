import { Action } from '@ngrx/store';
import { Company } from '../../../models';

export const SEARCH = '[Company] Search';
export const SEARCH_COMPLETE = '[Company] Search Complete';

export class SearchCompany implements Action {
    readonly type = SEARCH;

    constructor() {}
}

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;
  
    constructor(public payload: Company[]) { }
  }