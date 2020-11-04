import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasExtensosPage } from './mas-extensos.page';

describe('MasExtensosPage', () => {
  let component: MasExtensosPage;
  let fixture: ComponentFixture<MasExtensosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasExtensosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasExtensosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
