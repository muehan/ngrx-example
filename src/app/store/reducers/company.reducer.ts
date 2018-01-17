import * as companyActions from './../actions';

export function companyReducer(state = [], action: companyActions.Action){

    switch(action.type){
        case companyActions.LOAD_COMPANIES_SUCCESS: {
            console.log("LOAD_COMPANIES_SUCCESS");
            return action.payload;
        }
        case companyActions.DELETE_COMPANY_SUCCESS: {
            console.log("DELETE_COMPANY_SUCCESS");
            return state.filter(company => company.id !== action.payload);
        }
        case companyActions.CREATE_COMPANY_SUCCESS: {
            console.log("CREATE_COMPANY_SUCCESS");
            return state.concat(action.payload);
        }
        default: {
            return state;
        }
    }

}