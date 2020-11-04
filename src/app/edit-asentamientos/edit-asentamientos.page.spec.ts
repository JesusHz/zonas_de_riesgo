import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAsentamientosPage } from './edit-asentamientos.page';

describe('EditAsentamientosPage', () => {
  let component: EditAsentamientosPage;
  let fixture: ComponentFixture<EditAsentamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAsentamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAsentamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
