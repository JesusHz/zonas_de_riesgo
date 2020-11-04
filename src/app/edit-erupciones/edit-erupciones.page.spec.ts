import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditErupcionesPage } from './edit-erupciones.page';

describe('EditErupcionesPage', () => {
  let component: EditErupcionesPage;
  let fixture: ComponentFixture<EditErupcionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditErupcionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditErupcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
