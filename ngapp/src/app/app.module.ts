import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {environment} from '../environments/environment';
// let relpath = environment.relpath;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//@urir https://stackblitz.com/github/ngx-translate/example?file=src%2Fapp%2Fapp.module.ts

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {FlexLayoutModule} from '@angular/flex-layout';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
 //----------------------------------------------
  //@STCissue Should take care of the Assets language relative path
  return new TranslateHttpLoader(httpClient,"./assets/i18n/",".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //@a Make the Pipe Translate to load local from assets
    HttpClientModule,
    FlexLayoutModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { 
  // relpath = relpath;
}
