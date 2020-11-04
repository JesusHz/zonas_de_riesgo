import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRiosPage } from './add-rios.page';

describe('AddRiosPage', () => {
  let component: AddRiosPage;
  let fixture: ComponentFixture<AddRiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
