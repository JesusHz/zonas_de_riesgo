import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddErupcionesPage } from './add-erupciones.page';

describe('AddErupcionesPage', () => {
  let component: AddErupcionesPage;
  let fixture: ComponentFixture<AddErupcionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddErupcionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddErupcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
