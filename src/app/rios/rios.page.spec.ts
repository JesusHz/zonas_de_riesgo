import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiosPage } from './rios.page';

describe('RiosPage', () => {
  let component: RiosPage;
  let fixture: ComponentFixture<RiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
