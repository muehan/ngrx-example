import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';

export const ROUTES: Routes = [
    { path: '',                 component: CompanyComponent },
    { path: 'company',           component: CompanyComponent },
  ];