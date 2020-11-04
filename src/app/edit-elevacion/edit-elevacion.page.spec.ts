import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditElevacionPage } from './edit-elevacion.page';

describe('EditElevacionPage', () => {
  let component: EditElevacionPage;
  let fixture: ComponentFixture<EditElevacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElevacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditElevacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
