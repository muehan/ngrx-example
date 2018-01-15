import { Injectable } from '@angular/core';
import { Company } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

    constructor() { }

    public loadCompanies(): Observable<Company[]> {
        return Observable.of([
            {
                name: "Company1",
                email: "demo@company1.com",
                phone: 558877885
            },
            {
                name: "Company2",
                email: "demo@company2.com",
                phone: 1234562345
            },
            {
                name: "Company3",
                email: "demo@company3.com",
                phone: 654367543
            }
        ])
    }
}