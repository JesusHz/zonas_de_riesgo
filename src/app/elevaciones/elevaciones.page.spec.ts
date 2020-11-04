import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElevacionesPage } from './elevaciones.page';

describe('ElevacionesPage', () => {
  let component: ElevacionesPage;
  let fixture: ComponentFixture<ElevacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElevacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
