import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditIndustrializadosPage } from './edit-industrializados.page';

describe('EditIndustrializadosPage', () => {
  let component: EditIndustrializadosPage;
  let fixture: ComponentFixture<EditIndustrializadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIndustrializadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditIndustrializadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
