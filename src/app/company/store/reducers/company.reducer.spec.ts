import * as companyActions from './../actions';
import { companyReducer } from './company.reducer';

describe(`companyReducer`, () => {
    describe(`deleteCompanyAction`, () => {
        it('should delete a company', () => {
            const currentState = [
                { id: 1, name: 'ABB', email: 'info@abb.ch', phone: 123456 },
                { id: 2, name: 'SBB', email: 'info@sbb.ch', phone: 234567 },
            ];

            const expectedResult = [
                { id: 2, name: 'SBB', email: 'info@sbb.ch', phone: 234567 },
            ]

            const action = new companyActions.DeleteCompanySuccessAction(1);
            const result = companyReducer(currentState, action);
            expect(result).toEqual(expectedResult);
        })
    });
});