import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFracturasPage } from './add-fracturas.page';

describe('AddFracturasPage', () => {
  let component: AddFracturasPage;
  let fixture: ComponentFixture<AddFracturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFracturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFracturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
