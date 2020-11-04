import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenosExtensosPage } from './menos-extensos.page';

describe('MenosExtensosPage', () => {
  let component: MenosExtensosPage;
  let fixture: ComponentFixture<MenosExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenosExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenosExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
