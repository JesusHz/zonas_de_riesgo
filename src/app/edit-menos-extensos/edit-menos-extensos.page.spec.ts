import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMenosExtensosPage } from './edit-menos-extensos.page';

describe('EditMenosExtensosPage', () => {
  let component: EditMenosExtensosPage;
  let fixture: ComponentFixture<EditMenosExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenosExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMenosExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
