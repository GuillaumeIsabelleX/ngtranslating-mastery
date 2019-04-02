# Future Feature
* Rather than copy the country-icons, use :https://unpkg.com/country-icons@1.0.2/Markup/blocks/lng/i/ca.svg
** URL + $country + .svg


# ngtranslating-mastery
@STCGoal Translating an Angular App - Creating Multi-Cultural App

STATE: Suceeded
URL : https://guillaumeisabellex.github.io/ngtranslating-mastery/docs/
INSIGHT:  ngx-translate

## HOWTO see: [NGX-Translating-Mastery](#ngx-translate)


---


## @STCIssue How do I translate an Angular app?
* how is that translated, is there a package, a cultural file where all strings are stored for-each culture ?

## @STCGoal : A Language bar where you select your language.



---
---
# Experimentation No 1 - [t]:(190322130380)

```bash
# --@o A file is generated in
ls src/locale/
messages.fr.xlf # French
messages.xlf # English
```
--@o The HTML is
```html

<span i18n>My english text</span>
```
## [Angular and i18n]()  
Internationalization is the process of designing and preparing your app to be usable in different languages

Angular follows the Unicode LDML convention that uses stable identifiers (Unicode locale identifiers) based on the norm BCP47. It is very important that you follow this convention when you define your locale, because the Angular i18n tools use this locale id to find the correct corresponding locale data.
[Setting up the locale of your app]()

## [Create a translation source file]()
```bash
ng xi18n
# or
ng xi18n --output-path src/locale
# or
ng xi18n  --i18n-format=xlf
ng xi18n  --i18n-format=xlf2
ng xi18n  --i18n-format=xmb

```

---
---

# [ngx-translate]()
## ngx-translate VSCode Extension ???



```bash
npm install @ngx-translate/core --save
yarn add @ngx-translate/core --save
```

## Displaying an Icon of Country
```bash
yarn add country-icons --save
```
### angular.json
```json
"assets": [
     "src/favicon.ico",
     {
       "glob": "*.svg",
       "input": "./node_modules/country-icons/Markup/blocks/lng/i/",
       "output": "assets/i18n.icon/"
     },
     "src/assets"
   ],
```
### [app.module.ts]()
[app.module.ts]:https://github.com/GuillaumeIsabelleX/ngtranslating-mastery/blob/master/ngapp/src/app/app.module.ts

```typescript

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {FlexLayoutModule} from '@angular/flex-layout';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
 //----------------------------------------------
  //@STCissue Should take care of the Assets language relative path
  return new TranslateHttpLoader(httpClient,"./assets/i18n/",".json");


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
  ],//...
}
```


### [app.component.ts]()
[app.component.ts]:https://github.com/GuillaumeIsabelleX/ngtranslating-mastery/blob/master/ngapp/src/app/app.component.ts


```typescript
import { Component } from '@angular/core';


//@STCGoal Show a Site in French
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //relpath = relpath;

  refreshIconPath() {

    this.iconpath = this.getLanguageIconPath(this.browserLang);
  }

  langSupported = ['en', 'fr', 'es'];

  title = 'ngtranslating-mastery';
  browserLang = '';
  bypassLang = true;

  iconpathbase = 'assets/i18n.icon/';
  iconpath = '';

  /**
   *
   */
  constructor(public translate: TranslateService) {
  //  console.log(this.relpath);
    //------------------------------------------------------------
    //@STCGoal Show a Site in French
    translate.addLangs(this.langSupported); //@o Adding two language
    translate.setDefaultLang('en'); //@o Default French

    if (!this.bypassLang) {
      this.browserLang = translate.getBrowserLang();

      translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : 'fr'); //@o If the browser is not FR or EN use English as default
    }
    else {
      this.browserLang = "en"; //bypass to FR for experimenting as my browser is English
    }

    this.refreshIconPath();

    //--------------------------


  }

  /**
   * Get image path for a language
   * @param l
   */
  getLanguageIconPath(l: string): string {
    return this.iconpathbase + l + ".svg";
  }

  /**
   * Set a Language for the UI
   * @param l
   */
  setLanguage(l: string) {
    this.browserLang = l;
    this.translate.use(this.browserLang);
    this.refreshIconPath();
  }
}

```

### [app.component.html]()
[app.component.html]:https://github.com/GuillaumeIsabelleX/ngtranslating-mastery/blob/master/ngapp/src/app/app.component.html


```HTML
>

<div fxLayout="row" >

  <span *ngFor="let l of langSupported"   >
    <button class="lang-button" (click)="setLanguage(l)" >{{l|uppercase }} <img [src]="getLanguageIconPath(l)"  class="lang-icon"></button>
  </span>
</div>
  <hr>


<span>{{'HOME.HELLO' | translate}}</span>
<h3>Current browser lang: {{browserLang}} <img [src]="getLanguageIconPath(browserLang)"  class="lang-icon"></h3>
<div style="text-align:center">
  <h1>
     <span id="title">{{'HOME.TITLE' | translate}} {{title}}</span></h1>

```



### assets/i18n/en.json
```json
{
   "LANG": {
      "NAME": "English",
      "ICON": "en.svg"
   },
   "HOME": {
      "HELLO": "Hello here that is a try of the ngx-translate - This is obviously the English string ",
      "TITLE": "Welcome to "
   },
   "HELPSTART":"Here are some links to help you start:"
}
```




___

## Resources
* [Angular and i18n]()
* [Setting up the locale of your app]()
* [Create a translation source file]()
* [ngx-translate]()  [app.module.ts]()

[ngx-translate]:https://github.com/ngx-translate/core#installation


[Angular and i18n]:https://angular.io/guide/i18n#angular-and-i18n

[Setting up the locale of your app]:https://angular.io/guide/i18n#setting-up-the-locale-of-your-app


[Create a translation source file]:https://angular.io/guide/i18n#create-a-translation-source-file







---
---
