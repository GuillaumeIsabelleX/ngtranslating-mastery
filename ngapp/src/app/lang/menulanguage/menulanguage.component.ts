import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menulanguage',
  templateUrl: './menulanguage.component.html',
  styleUrls: ['./menulanguage.component.scss']
})
export class MenulanguageComponent implements OnInit {


  browserLang = '';
  langSupported = ['en', 'fr', 'es','de'];


  iconpathbase = 'https://unpkg.com/country-icons@1.0.2/Markup/blocks/lng/i/';

  constructor(public translate: TranslateService) { 
    this.initApp();
  }

  ngOnInit() {
  }


  bypassLang = true;

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


    
  }

  iconpath = '';
  refreshIconPath() {
    
    this.iconpath = this.getLanguageIconPath(this.browserLang);
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

  

}
