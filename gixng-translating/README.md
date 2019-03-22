
# Internationalizing an Angular App

* Using : https://github.com/ngx-translate/core#installation
* Demo page:  http://guillaumeisabelle.com/r/ngtranslating-mastery/docs/npmjs




## Installing

```bash
# Does install all that is bellow (ngx-translate +  country-icons)
yarn add gixng-translating --save
```
---
### what it install:
```bash
# We use ngx-tranlate
yarn add @ngx-translate/core --save

# Displaying an Icon of Country
yarn add country-icons --save
```

## Files
* Here are the main file to help understand what is done for translating.

|  File 	|   	|   	|   	|   	|
|---	|---	|---	|---	|---	|
|  [angular.json](#angularjson) 	|  Copy the Culture icon in assets 	|   	|   	|   	|
|   [app.module.ts](#app.module.ts)	|  uses TranslationService 	|   	|   	|   	|
|   [app.component.ts](#app.component.ts)	|  Sets up language 	|   	|   	|   	|
|   [app.component.html](#app.component.html)	|   Choose language	|   	|   	|   	|
 
 



---
## ngapp/Root


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
    "NAME": "English"
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
* [ngtranslating-mastery]()

[ngx-translate]:https://github.com/ngx-translate/core#installation


[Angular and i18n]:https://angular.io/guide/i18n#angular-and-i18n

[Setting up the locale of your app]:https://angular.io/guide/i18n#setting-up-the-locale-of-your-app


[Create a translation source file]:https://angular.io/guide/i18n#create-a-translation-source-file




