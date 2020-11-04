import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PobladosPage } from './poblados.page';

describe('PobladosPage', () => {
  let component: PobladosPage;
  let fixture: ComponentFixture<PobladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PobladosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PobladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
