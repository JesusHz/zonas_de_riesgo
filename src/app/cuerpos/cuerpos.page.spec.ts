import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuerposPage } from './cuerpos.page';

describe('CuerposPage', () => {
  let component: CuerposPage;
  let fixture: ComponentFixture<CuerposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuerposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuerposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
