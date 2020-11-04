import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPobladosPage } from './add-poblados.page';

describe('AddPobladosPage', () => {
  let component: AddPobladosPage;
  let fixture: ComponentFixture<AddPobladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPobladosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPobladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
