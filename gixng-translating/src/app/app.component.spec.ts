//@q What are Spec file ?
/* The spec files are unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file. They are run using the Jasmine javascript test framework through the Karma task runner when you use the ng test command.
*/
//@urir https://angular.io/guide/testing

import { RouterTestingModule } from '@angular/router/testing';

//Loading tests from :
//@urir https://stackblitz.com/github/ngx-translate/example?file=src%2Fapp%2Fapp.component.spec.ts
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {async, TestBed} from '@angular/core/testing';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {AppComponent} from './app.component';
import {HttpLoaderFactory} from "./app.module";

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../assets/i18n/fr.json');



describe('AppComponent', () => {


//Loading tests from :
//@urir https://stackblitz.com/edit/ngtranslate-mastery-190322?file=src/app/app.component.spec.ts
let translate: TranslateService;
let http: HttpTestingController;




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
    }).compileComponents();
    
    //Loading tests from :
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngtranslating-mastery'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngtranslating-mastery');
  });
  
  //TRANSLATED so forgetting to test that... but might
  // it('should render title in a h1 tag', () => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngtranslating-mastery!');
    // });
    
  it('should load translations', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('en');
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    // the DOM should be empty for now since the translations haven't been rendered yet
     expect(compiled.querySelector('#title').textContent).toEqual('');

    http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);
    http.expectNone('/assets/i18n/en.json');

    //Finally, assert that there are no outstanding requests.
   http.verify();

    fixture.detectChanges();
    // the content should be translated to english now
    expect(compiled.querySelector('#title').textContent).toEqual(TRANSLATIONS_EN.HOME.TITLE);

    translate.use('fr');
    http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);

    // Finally, assert that there are no outstanding requests.
    http.verify();

    // the content has not changed yet
    expect(compiled.querySelector('#title').textContent).toEqual(TRANSLATIONS_EN.HOME.TITLE);

    fixture.detectChanges();
    // the content should be translated to french now
    expect(compiled.querySelector('#title').textContent).toEqual(TRANSLATIONS_FR.HOME.TITLE);
  }));
});
