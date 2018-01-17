import { Injectable } from '@angular/core';
import { Company } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

    private companies = [
        {
            id: 1,
            name: "Company1",
            email: "demo@company1.com",
            phone: 558877885
        },
        {
            id: 2,
            name: "Company2",
            email: "demo@company2.com",
            phone: 1234562345
        },
        {
            id: 3,
            name: "Company3",
            email: "demo@company3.com",
            phone: 654367543
        }
    ]

    constructor() { }

    public loadCompanies(): Observable<Company[]> {
        return Observable.of(this.companies);
    }

    public deleteCompany(companyId: number): Observable<Company> {
        var deletedCompany: Company = this.companies.filter(company => company.id === companyId)[0];
        this.companies = this.companies.filter(company => company.id !== companyId);

        return Observable.of(deletedCompany);
    }

    public createCompany(company: Company): Observable<Company> {        
        var maxId = 0;
        this.companies.map(c => {
            if (c.id > maxId) { maxId = c.id }
        });

        maxId++;
        company.id = maxId;
        this.companies = this.companies.concat(company);

        return Observable.of(company);
    }
}