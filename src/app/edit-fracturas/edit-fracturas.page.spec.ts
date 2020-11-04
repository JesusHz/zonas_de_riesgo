import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFracturasPage } from './edit-fracturas.page';

describe('EditFracturasPage', () => {
  let component: EditFracturasPage;
  let fixture: ComponentFixture<EditFracturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFracturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFracturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
