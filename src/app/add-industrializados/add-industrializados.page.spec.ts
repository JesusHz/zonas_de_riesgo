import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIndustrializadosPage } from './add-industrializados.page';

describe('AddIndustrializadosPage', () => {
  let component: AddIndustrializadosPage;
  let fixture: ComponentFixture<AddIndustrializadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndustrializadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIndustrializadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
