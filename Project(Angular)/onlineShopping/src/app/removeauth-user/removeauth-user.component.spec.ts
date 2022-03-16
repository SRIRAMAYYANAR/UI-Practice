import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveauthUserComponent } from './removeauth-user.component';

describe('RemoveauthUserComponent', () => {
  let component: RemoveauthUserComponent;
  let fixture: ComponentFixture<RemoveauthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveauthUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveauthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
