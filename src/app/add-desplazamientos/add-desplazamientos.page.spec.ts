import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDesplazamientosPage } from './add-desplazamientos.page';

describe('AddDesplazamientosPage', () => {
  let component: AddDesplazamientosPage;
  let fixture: ComponentFixture<AddDesplazamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesplazamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDesplazamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
