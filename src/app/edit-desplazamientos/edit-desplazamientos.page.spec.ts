import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDesplazamientosPage } from './edit-desplazamientos.page';

describe('EditDesplazamientosPage', () => {
  let component: EditDesplazamientosPage;
  let fixture: ComponentFixture<EditDesplazamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDesplazamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDesplazamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
