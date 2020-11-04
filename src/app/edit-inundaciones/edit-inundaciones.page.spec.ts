import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInundacionesPage } from './edit-inundaciones.page';

describe('EditInundacionesPage', () => {
  let component: EditInundacionesPage;
  let fixture: ComponentFixture<EditInundacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInundacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInundacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
