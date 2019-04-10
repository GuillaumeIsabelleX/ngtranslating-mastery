import { Component } from '@angular/core';


//@STCGoal Show a Site in French
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initApp(): any {
    
    
    //@STCGoal Show a Site in French
    this.translate.addLangs(this.langSupported); //@o Adding two language
    this.translate.setDefaultLang('en'); //@o Default French

    if (!this.bypassLang) {
      this.browserLang = this.translate.getBrowserLang();

      this.translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : 'fr'); //@o If the browser is not FR or EN use English as default
    }
    else {
      this.browserLang = "en"; //bypass to FR for experimenting as my browser is English
    }

    this.refreshIconPath();

    //--------------------------


    this.doResult = 'just initialized';

  }


  //relpath = relpath;
  username = "Guillaume";

  //doResult:Observable<string>;
  doResult:string;
  
  refreshIconPath() {
    
    this.iconpath = this.getLanguageIconPath(this.browserLang);
  }
  
  langSupported = ['en', 'fr', 'es','de'];

  title = 'ngtranslating-mastery';
  browserLang = '';
  bypassLang = true;
  
  iconpathbase = 'https://unpkg.com/country-icons@1.0.2/Markup/blocks/lng/i/';
  iconpath = '';
  
  /**
   *
   */
  constructor(public translate: TranslateService) {
  //  console.log(this.relpath);
    //------------------------------------------------------------
    this.initApp();
  }

  /**
   * Get image path for a language
   * @param l 
   */
  getLanguageIconPath(l: string): string {
    let lCorrected = l;
    if (l=="en") lCorrected = 'us'; //correcting that en is not available but US
    return this.iconpathbase + lCorrected + ".svg";
  }

  /**
   * Set a Language for the UI
   * @param l 
   */
  setLanguage(l: string) {
    console.log("Changing language to: " + l);
    
    this.browserLang = l;
    this.translate.use(this.browserLang);
    this.refreshIconPath();
  }


  doSomething(){
    console.log("do sometghing just ran");
    this.doResult = 'result passed';

    let bugTheTest = false;
    if (bugTheTest)this.doResult = 'ERROR';
  }
}
