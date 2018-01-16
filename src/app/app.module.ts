import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

import { ROUTES } from './app.routes';
import { NavigationComponent } from './navigation/navigation.component';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './company/store/reducers/company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CompanyEffects } from './company/store/effects';
import { CompanyService } from './service/company.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot({companies: companyReducer}),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
