import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPobladosPage } from './edit-poblados.page';

describe('EditPobladosPage', () => {
  let component: EditPobladosPage;
  let fixture: ComponentFixture<EditPobladosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPobladosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPobladosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
