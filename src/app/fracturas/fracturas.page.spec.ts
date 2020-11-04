import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FracturasPage } from './fracturas.page';

describe('FracturasPage', () => {
  let component: FracturasPage;
  let fixture: ComponentFixture<FracturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FracturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FracturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
