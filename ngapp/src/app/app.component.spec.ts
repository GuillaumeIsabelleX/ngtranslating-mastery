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

  beforeAll(function (done) {
    setTimeout(done, 2000);
  });


  it('should have selected the button using its id using CSS', function () {
    var button = fixture.debugElement.query(By.css('#doSomething'));
    expect(button).toBeTruthy();
  });

  it('should do something by clicking a button', async(
    () => {
      spyOn(component, 'doSomething');

      // var button = fixture.debugElement.query(By.css('#doSomething'));

      // button.nativeElement.click();

      
      expect(component.doResult).toContain('result');
    }
  ));

  // it('should', async(() => {
  //   spyOn(component, 'setLanguage');

  //   let button = fixture.debugElement.nativeElement.querySelector('button');
  //   button.click();

  //   fixture.whenStable().then(() => {
  //     expect(component.onEditButtonClick).toHaveBeenCalled();
  //   });



  // }
  // ));
});
