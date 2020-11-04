import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCuerposPage } from './add-cuerpos.page';

describe('AddCuerposPage', () => {
  let component: AddCuerposPage;
  let fixture: ComponentFixture<AddCuerposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCuerposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCuerposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
