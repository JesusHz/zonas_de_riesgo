import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMenosExtensosPage } from './add-menos-extensos.page';

describe('AddMenosExtensosPage', () => {
  let component: AddMenosExtensosPage;
  let fixture: ComponentFixture<AddMenosExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenosExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMenosExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
