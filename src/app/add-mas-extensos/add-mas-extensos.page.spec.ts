import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMasExtensosPage } from './add-mas-extensos.page';

describe('AddMasExtensosPage', () => {
  let component: AddMasExtensosPage;
  let fixture: ComponentFixture<AddMasExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMasExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMasExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
