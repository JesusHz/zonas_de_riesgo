import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviernosPage } from './inviernos.page';

describe('InviernosPage', () => {
  let component: InviernosPage;
  let fixture: ComponentFixture<InviernosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviernosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviernosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
