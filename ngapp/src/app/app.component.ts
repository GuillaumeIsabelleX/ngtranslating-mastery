import { Component } from '@angular/core';



//@STCGoal Show a Site in French
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
    //------------------------------------------------------------
    //@STCGoal Show a Site in French
    translate.addLangs(['en', 'fr']); //@o Adding two language
    translate.setDefaultLang('en'); //@o Default French

    if (!this.bypassLang) {
      this.browserLang = translate.getBrowserLang();

      translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : 'fr'); //@o If the browser is not FR or EN use English as default
    }
    else {
      this.browserLang = "en"; //bypass to FR for experimenting as my browser is English
    }

    this.refreshIconPath();

    //------------------------------------------------------------


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
