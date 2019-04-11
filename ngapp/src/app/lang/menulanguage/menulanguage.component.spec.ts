import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulanguageComponent } from './menulanguage.component';

import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppComponent } from 'src/app/app.component';

describe('MenulanguageComponent', () => {
  let component: MenulanguageComponent;
  let fixture: ComponentFixture<MenulanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
      declarations: [ MenulanguageComponent ],
      providers:[TranslateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
