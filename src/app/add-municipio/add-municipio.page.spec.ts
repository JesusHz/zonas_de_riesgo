import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMunicipioPage } from './add-municipio.page';

describe('AddMunicipioPage', () => {
  let component: AddMunicipioPage;
  let fixture: ComponentFixture<AddMunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMunicipioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
