import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiesgosPage } from './riesgos.page';

describe('RiesgosPage', () => {
  let component: RiesgosPage;
  let fixture: ComponentFixture<RiesgosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiesgosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiesgosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
