import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMunicipioPage } from './edit-municipio.page';

describe('EditMunicipioPage', () => {
  let component: EditMunicipioPage;
  let fixture: ComponentFixture<EditMunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMunicipioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
