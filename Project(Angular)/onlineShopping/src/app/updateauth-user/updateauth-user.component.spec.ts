import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateauthUserComponent } from './updateauth-user.component';

describe('UpdateauthUserComponent', () => {
  let component: UpdateauthUserComponent;
  let fixture: ComponentFixture<UpdateauthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateauthUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateauthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
