import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRiosPage } from './edit-rios.page';

describe('EditRiosPage', () => {
  let component: EditRiosPage;
  let fixture: ComponentFixture<EditRiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
