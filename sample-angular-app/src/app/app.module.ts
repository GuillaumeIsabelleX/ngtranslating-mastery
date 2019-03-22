import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//@urir https://angular.io/guide/i18n#i18n-pipes
//@stcgoal Angular pipes can help you with internationalization: the DatePipe, CurrencyPipe, DecimalPipe and PercentPipe use locale data to format data based on the LOCALE_ID.
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
