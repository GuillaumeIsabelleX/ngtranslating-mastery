# ngtranslating-mastery
@STCGoal Translating an Angular App - Creating Multi-Cultural App

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


___

## Resources
* [Angular and i18n]()
* [Setting up the locale of your app]()
* [Create a translation source file]()
* [ngx-translate]()

[ngx-translate]:https://github.com/ngx-translate/core#installation

[Angular and i18n]:https://angular.io/guide/i18n#angular-and-i18n

[Setting up the locale of your app]:https://angular.io/guide/i18n#setting-up-the-locale-of-your-app


[Create a translation source file]:https://angular.io/guide/i18n#create-a-translation-source-file







---
---
