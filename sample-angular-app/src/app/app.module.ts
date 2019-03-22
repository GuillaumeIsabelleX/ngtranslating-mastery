import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//@urir https://angular.io/guide/i18n#i18n-pipes
//@stcgoal Angular pipes can help you with internationalization: the DatePipe, CurrencyPipe, DecimalPipe and PercentPipe use locale data to format data based on the LOCALE_ID.




@NgModule({
  imports: [ BrowserModule 
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
