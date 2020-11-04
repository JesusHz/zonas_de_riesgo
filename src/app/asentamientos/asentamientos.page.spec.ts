import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsentamientosPage } from './asentamientos.page';

describe('AsentamientosPage', () => {
  let component: AsentamientosPage;
  let fixture: ComponentFixture<AsentamientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsentamientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsentamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
