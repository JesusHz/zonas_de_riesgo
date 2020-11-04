import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddInundacionesPage } from './add-inundaciones.page';

describe('AddInundacionesPage', () => {
  let component: AddInundacionesPage;
  let fixture: ComponentFixture<AddInundacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInundacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddInundacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
