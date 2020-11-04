import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesplazamientosPage } from './desplazamientos.page';

describe('DesplazamientosPage', () => {
  let component: DesplazamientosPage;
  let fixture: ComponentFixture<DesplazamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesplazamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesplazamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
