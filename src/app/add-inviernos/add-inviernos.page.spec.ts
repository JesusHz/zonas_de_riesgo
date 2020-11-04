import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInviernosPage } from './add-inviernos.page';

describe('AddInviernosPage', () => {
  let component: AddInviernosPage;
  let fixture: ComponentFixture<AddInviernosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInviernosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInviernosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
