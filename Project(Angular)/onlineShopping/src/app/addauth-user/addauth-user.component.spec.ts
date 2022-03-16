import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddauthUserComponent } from './addauth-user.component';

describe('AddauthUserComponent', () => {
  let component: AddauthUserComponent;
  let fixture: ComponentFixture<AddauthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddauthUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddauthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
