import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAsentamientosPage } from './add-asentamientos.page';

describe('AddAsentamientosPage', () => {
  let component: AddAsentamientosPage;
  let fixture: ComponentFixture<AddAsentamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAsentamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAsentamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
