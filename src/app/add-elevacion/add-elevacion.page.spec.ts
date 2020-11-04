import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddElevacionPage } from './add-elevacion.page';

describe('AddElevacionPage', () => {
  let component: AddElevacionPage;
  let fixture: ComponentFixture<AddElevacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElevacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddElevacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
