//@q What are Spec file ?
/* The spec files are unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file. They are run using the Jasmine javascript test framework through the Karma task runner when you use the ng test command.
*/
//@urir https://angular.io/guide/testing

import { RouterTestingModule } from '@angular/router/testing';

//Loading tests from :
//@urir https://stackblitz.com/github/ngx-translate/example?file=src%2Fapp%2Fapp.component.spec.ts
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {AppComponent} from './app.component';
import {HttpLoaderFactory} from "./app.module";

// const TRANSLATIONS_EN = require('../assets/i18n/en.json');
// const TRANSLATIONS_FR = require('../assets/i18n/fr.json');



describe('AppComponent', () => {


//Loading tests from :
//@urir https://stackblitz.com/edit/ngtranslate-mastery-190322?file=src/app/app.component.spec.ts

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;


beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      
      //Loading tests from :
      HttpClientTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [TranslateService],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });;
     
  }));

  it('should create the app', () => { 
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ngtranslating-mastery'`, () => {
     
    expect(component.title).toContain('ngtranslating-mastery');
  });
  
  // it('should', async(() => { 
  //   spyOn(component, 'onEditButtonClick');
  
  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();
  
  //   fixture.whenStable().then(() => {
  //     expect(component.onEditButtonClick).toHaveBeenCalled();
  //   });
  // }));

  // it(`should have an english title containing 'Welcome'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.setLanguage('en');
  //   console.log(app.title);
  //   expect(app.title).toContain('Welcome');
  // });
  

  //TRANSLATED so forgetting to test that... but might
  // it('should render title in a h1 tag', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngtranslating-mastery!');
    // });
    
    
});
