import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditInviernosPage } from './edit-inviernos.page';

describe('EditInviernosPage', () => {
  let component: EditInviernosPage;
  let fixture: ComponentFixture<EditInviernosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInviernosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditInviernosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
