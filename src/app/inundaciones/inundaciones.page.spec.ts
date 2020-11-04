import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InundacionesPage } from './inundaciones.page';

describe('InundacionesPage', () => {
  let component: InundacionesPage;
  let fixture: ComponentFixture<InundacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InundacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InundacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
