import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErupcionesPage } from './erupciones.page';

describe('ErupcionesPage', () => {
  let component: ErupcionesPage;
  let fixture: ComponentFixture<ErupcionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErupcionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErupcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
