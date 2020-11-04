import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCuerposPage } from './edit-cuerpos.page';

describe('EditCuerposPage', () => {
  let component: EditCuerposPage;
  let fixture: ComponentFixture<EditCuerposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCuerposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCuerposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
