import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMasExtensosPage } from './edit-mas-extensos.page';

describe('EditMasExtensosPage', () => {
  let component: EditMasExtensosPage;
  let fixture: ComponentFixture<EditMasExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMasExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMasExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
