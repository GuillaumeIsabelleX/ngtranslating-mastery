//@q What are Spec file ?
/* The spec files are unit tests for your source files. The convention for Angular applications is to have a .spec.ts file for each .ts file. They are run using the Jasmine javascript test framework through the Karma task runner when you use the ng test command.
*/
//@urir https://angular.io/guide/testing

import { RouterTestingModule } from '@angular/router/testing';

//Loading tests from :
//@urir https://stackblitz.com/github/ngx-translate/example?file=src%2Fapp%2Fapp.component.spec.ts
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from "./app.module";
import { By } from '@angular/platform-browser';
import { ExpectedConditions } from 'protractor';

let count = 0;

describe('AppComponent', () => {


  //Loading tests from :
  //@urir https://stackblitz.com/edit/ngtranslate-mastery-190322?file=src/app/app.component.spec.ts

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;


  beforeEach(async(() => {
    count++;


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

      component.initApp();

      //@test Had clicked a button on the UI which sets up a value we validate

      var button = fixture.debugElement.query(By.css('#doSomething'));

      button.nativeElement.click();


    });;







  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ngtranslating-mastery'`, () => {

    expect(component.title).toContain('ngtranslating-mastery');
  });




  it('should have selected the button using its id using CSS', function () {
    var button = fixture.debugElement.query(By.css('#doSomething'));
    expect(button).toBeTruthy();
  });

  it('should do something by clicking a button', async(
    () => {

      expect(component.doResult).toContain('result');
    }
  ));

  //@testing Transtaltion are loading
  it('validated translation files are there',
    async(
      () => {
        let TRANSLATIONS_EN: any;
        let TRANSLATIONS_FR: any;
        let TRANSLATIONS_DE: any;
        try {

          TRANSLATIONS_EN = require('../assets/i18n/en.json');
          TRANSLATIONS_FR = require('../assets/i18n/fr.json');
          TRANSLATIONS_DE = require('../assets/i18n/de.json');

          console.log(TRANSLATIONS_FR.HOME.TITLE);


        } catch (error) {

        }

        //@testing some of the Translation object that should be read to pass the test
        expect(TRANSLATIONS_EN.HOME).toBeTruthy();
        expect(TRANSLATIONS_EN.LANG).toBeTruthy();
        expect(TRANSLATIONS_EN.LANG.NAME).toEqual("English");
        expect(TRANSLATIONS_FR.HOME).toBeTruthy();
        expect(TRANSLATIONS_FR.LANG).toBeTruthy();
        expect(TRANSLATIONS_FR.LANG.NAME).toEqual("French");
        
        expect(TRANSLATIONS_DE.HOME).toBeTruthy();
        expect(TRANSLATIONS_DE.LANG).toBeTruthy();
        expect(TRANSLATIONS_DE.LANG.NAME).toEqual("German");
      }
    ));


  //@test Languages is working
  it('validated language selection works',
    async(
      () => {
        const fixture = TestBed.createComponent(AppComponent);

        let component: AppComponent;
        component = fixture.componentInstance;

        fixture.detectChanges();

        //Get the title in HTML
        let de = fixture.debugElement.query(By.css('#title'));
        let el: HTMLSpanElement;

        el = de.nativeElement;
        console.log("SPAN: " + el.textContent);

        expect(el.textContent).toContain(component.title);

      }
    ));

    afterEach(() => {
      //something after each test.
      console.log("Count: " + count);
  });
});